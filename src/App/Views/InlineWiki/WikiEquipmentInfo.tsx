import * as React from "react";
import { fmap, fmapF } from "../../../Data/Functor";
import { elemF, intercalate, List, notElem, notNull, subscript } from "../../../Data/List";
import { alt_, bind, bindF, ensure, fromMaybe, guard, imapMaybe, liftM2, mapMaybe, Maybe, maybe, maybeR, maybeRNullF, then } from "../../../Data/Maybe";
import { lookupF, OrderedMap } from "../../../Data/OrderedMap";
import { fromDefault, Record } from "../../../Data/Record";
import { fst, isTuple, snd } from "../../../Data/Tuple";
import { Item } from "../../Models/Hero/Item";
import { Attribute } from "../../Models/Wiki/Attribute";
import { Book } from "../../Models/Wiki/Book";
import { CombatTechnique } from "../../Models/Wiki/CombatTechnique";
import { ItemTemplate } from "../../Models/Wiki/ItemTemplate";
import { L10n, L10nRecord } from "../../Models/Wiki/L10n";
import { PrimaryAttributeDamageThreshold } from "../../Models/Wiki/sub/PrimaryAttributeDamageThreshold";
import { SourceLink } from "../../Models/Wiki/sub/SourceLink";
import { minus, ndash } from "../../Utilities/Chars";
import { localizeNumber, localizeSize, localizeWeight, translate } from "../../Utilities/I18n";
import { prefixCT } from "../../Utilities/IDUtils";
import { convertPrimaryAttributeToArray } from "../../Utilities/ItemUtils";
import { dec, gt } from "../../Utilities/mathUtils";
import { sign, signZero } from "../../Utilities/NumberUtils";
import { pipe, pipe_ } from "../../Utilities/pipe";
import { renderMaybe, renderMaybeWith } from "../../Utilities/ReactUtils";
import { Markdown } from "../Universal/Markdown";
import { WikiSource } from "./Elements/WikiSource";
import { WikiBoxTemplate } from "./WikiBoxTemplate";

export interface WikiEquipmentInfoProps {
  attributes: OrderedMap<string, Record<Attribute>>
  books: OrderedMap<string, Record<Book>>
  combatTechniques: OrderedMap<string, Record<CombatTechnique>>
  x: Record<ItemTemplate> | Record<Item>
  l10n: L10nRecord
  itemTemplates: OrderedMap<string, Record<ItemTemplate>>
}

const ITAL = ItemTemplate.AL
const ITA = ItemTemplate.A
const PADTA = PrimaryAttributeDamageThreshold.A
const CTA = CombatTechnique.A
const AA = Attribute.A

// tslint:disable-next-line: cyclomatic-complexity
export function WikiEquipmentInfo (props: WikiEquipmentInfoProps) {
  const { attributes, x, l10n, combatTechniques, itemTemplates } = props
  const locale = L10n.A.id (l10n)
  const gr = ITAL.gr (x)
  const name = ITAL.name (x)
  const mprice = ITAL.price (x)
  const mweight = ITAL.weight (x)
  const combatTechniqueId = ITAL.combatTechnique (x)
  const damageDiceNumber = ITAL.damageDiceNumber (x)
  const damageDiceSides = ITAL.damageDiceSides (x)
  const damageFlat = ITAL.damageFlat (x)
  const mpadt_obj = ITAL.damageBonus (x)
  const at = ITAL.at (x)
  const pa = ITAL.pa (x)
  const reach = ITAL.reach (x)
  const mlength = ITAL.length (x)
  const reloadTime = ITAL.reloadTime (x)
  const range = ITAL.range (x)
  const ammunition = ITAL.ammunition (x)
  const pro = ITAL.pro (x)
  const enc = ITAL.enc (x)
  const movMod = ITAL.movMod (x)
  const iniMod = ITAL.iniMod (x)
  const addPenalties = ITAL.addPenalties (x)
  const templ = then (guard (ITAL.isTemplateLocked (x))) (ensure (ItemTemplate.is) (x))
  const msrc = fmap (ITA.src) (templ)
  const mnote = bindF (ITA.note) (templ)
  const mrules = bindF (ITA.rules) (templ)
  const madvantage =
    pipe (bindF (ensure (pipe (ITA.gr, elemF (List (1, 2, 4))))), fmap (ITA.advantage)) (templ)
  const mdisadvantage =
    pipe (bindF (ensure (pipe (ITA.gr, elemF (List (1, 2, 4))))), fmap (ITA.disadvantage)) (templ)

  const ammunitionTemplate = bind (ammunition) (lookupF (itemTemplates))

  const addPenaltiesArr =
    addPenalties
      ? List (
          `${minus}${Maybe.sum (movMod) + 1} ${translate (l10n) ("movement.short")}`,
          `${minus}${Maybe.sum (iniMod) + 1} ${translate (l10n) ("initiative.short")}`
        )
      : List<string> ()

  const mcombat_technique = bind (combatTechniqueId) (lookupF (combatTechniques))

  const mprimary_attr_id_list =
    alt_ (pipe_ (mpadt_obj, bindF (PADTA.primary), fmap (convertPrimaryAttributeToArray)))
         (() => fmapF (mcombat_technique) (CTA.primary))

  const mpadt =
    liftM2 ((primary_attr_id_list: List<string>) =>
            (padt_obj: Record<PrimaryAttributeDamageThreshold>) => {
              const th = PADTA.threshold (padt_obj)

              return isTuple (th)
                ? pipe_ (
                    primary_attr_id_list,
                    imapMaybe (i => pipe (
                                           lookupF (attributes),
                                           fmap (pipe (
                                             AA.short,
                                             s => `${s} ${i === 0 ? fst (th) : snd (th)}`
                                           ))
                                         )),
                    intercalate ("/")
                  )
                : pipe_ (
                    primary_attr_id_list,
                    mapMaybe (pipe (lookupF (attributes), fmap (AA.short))),
                    intercalate ("/")
                  )
            })
           (mprimary_attr_id_list)
           (mpadt_obj)

  const isLancesCT = Maybe.elem (prefixCT (7)) (combatTechniqueId)

  return (
    <WikiBoxTemplate
      className="item"
      title={name}
      subtitle={gr === 3
                  ? <p className="title">{translate (l10n) ("ammunition")}</p>
                  : null}
      >
      {gr === 3
        ? <p className="ammunition">{translate (l10n) ("ammunition")}</p>
        : null}
      {notElem (gr) (List (1, 2, 4))
        ? (
            <table className="melee">
              <tbody>
                {maybeR (null)
                        ((weight: number) => (
                          <tr>
                            <td>{translate (l10n) ("weight")}</td>
                            <td>
                              {pipe_ (weight, localizeWeight (locale), localizeNumber (locale))}
                              {" "}
                              {translate (l10n) ("weightunit.short")}
                            </td>
                          </tr>
                        ))
                        (ensureNatural (mweight))}
                {maybeR (null)
                        ((price: number) => (
                          <tr>
                            <td>{translate (l10n) ("price")}</td>
                            <td>
                              {localizeNumber (locale) (price)}
                              {" "}
                              {translate (l10n) ("priceunit")}
                            </td>
                          </tr>
                        ))
                        (ensureNatural (mprice))}
              </tbody>
            </table>
          )
        : null}
      {gr === 1 ? <table className="melee">
        <tbody>
          <tr>
            <td>{translate (l10n) ("combattechnique")}</td>
            <td>{renderMaybeWith (CTA.name) (mcombat_technique)}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("damage")}</td>
            <td>
              {renderMaybe (damageDiceNumber)}
              {translate (l10n) ("dice.short")}
              {renderMaybe (damageDiceSides)}
              {renderMaybeWith (signZero) (damageFlat)}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("primaryattributeanddamagethreshold.short")}</td>
            <td>{isLancesCT ? ndash : renderMaybe (mpadt)}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("attackparrymodifier.short")}</td>
            <td>
              {isLancesCT ? ndash : `${renderMaybeWith (sign) (at)}/${renderMaybeWith (sign) (pa)}`}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("reach")}</td>
            <td>
              {isLancesCT
                ? ndash
                : pipe_ (
                    reach,
                    bindF (pipe (dec, subscript (translate (l10n) ("reachlabels")))),
                    renderMaybe
                  )}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("weight")}</td>
            <td>
              {renderMaybeWith (pipe (localizeWeight (locale), localizeNumber (locale))) (mweight)}
              {" "}
              {translate (l10n) ("weightunit.short")}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("length")}</td>
            <td>
              {renderMaybeWith (pipe (localizeSize (locale), localizeNumber (locale))) (mlength)}
              {" "}
              {translate (l10n) ("lengthunit")}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("price")}</td>
            <td>
              {renderMaybeWith (localizeNumber (locale)) (mprice)}
              {" "}
              {translate (l10n) ("priceunit")}
            </td>
          </tr>
        </tbody>
      </table> : null}
      {gr === 2 ? <table className="ranged">
        <tbody>
          <tr>
            <td>{translate (l10n) ("combattechnique")}</td>
            <td>
              {renderMaybeWith (CTA.name) (mcombat_technique)}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("damage")}</td>
            <td>
              {renderMaybe (damageDiceNumber)}
              {translate (l10n) ("dice.short")}
              {renderMaybe (damageDiceSides)}
              {renderMaybeWith (signZero) (damageFlat)}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("reloadtime")}</td>
            <td>{renderMaybe (reloadTime)} {translate (l10n) ("actions.short")}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("range")}</td>
            <td>{renderMaybeWith (intercalate ("/")) (range)}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("ammunition")}</td>
            <td>{maybe (translate (l10n) ("none")) (ITAL.name) (ammunitionTemplate)}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("weight")}</td>
            <td>
              {renderMaybeWith (pipe (localizeWeight (locale), localizeNumber (locale))) (mweight)}
              {" "}
              {translate (l10n) ("weightunit.short")}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("length")}</td>
            <td>
              {renderMaybeWith (pipe (localizeSize (locale), localizeNumber (locale))) (mlength)}
              {" "}
              {translate (l10n) ("lengthunit")}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("price")}</td>
            <td>
              {renderMaybeWith (localizeNumber (locale)) (mprice)}
              {" "}
              {translate (l10n) ("priceunit")}
            </td>
          </tr>
        </tbody>
      </table> : null}
      {gr === 4 ? <table className="armor">
        <tbody>
          <tr>
            <td>{translate (l10n) ("protection.short")}</td>
            <td>{renderMaybe (pro)}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("encumbrance.short")}</td>
            <td>{renderMaybe (enc)}</td>
          </tr>
          <tr>
            <td>{translate (l10n) ("weight")}</td>
            <td>
              {renderMaybeWith (pipe (localizeWeight (locale), localizeNumber (locale))) (mweight)}
              {" "}
              {translate (l10n) ("weightunit.short")}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("price")}</td>
            <td>
              {renderMaybeWith (localizeNumber (locale)) (mprice)}
              {" "}
              {translate (l10n) ("priceunit")}
            </td>
          </tr>
          <tr>
            <td>{translate (l10n) ("additionalpenalties")}</td>
            <td>{maybe (ndash) (intercalate (", ")) (ensure (notNull) (addPenaltiesArr))}</td>
          </tr>
        </tbody>
      </table> : null}
      {maybeRNullF (mnote)
                   (str => (
                     <Markdown source={`**${translate (l10n) ("notes")}:** ${str}`} />
                   ))}
      {maybeRNullF (mrules)
                   (str => (
                     <Markdown source={`**${translate (l10n) ("rules")}:** ${str}`} />
                   ))}
      {maybeRNullF (madvantage)
                   (str => {
                     const tag =
                       ITAL.gr (x) === 4
                         ? translate (l10n) ("armoradvantage")
                         : translate (l10n) ("weaponadvantage")

                     const val = fromMaybe (translate (l10n) ("none")) (str)

                     return (
                       <Markdown source={`**${tag}:** ${val}`} />
                     )
                   })}
      {maybeRNullF (mdisadvantage)
                   (str => {
                     const tag =
                       ITAL.gr (x) === 4
                         ? translate (l10n) ("armordisadvantage")
                         : translate (l10n) ("weapondisadvantage")

                     const val = fromMaybe (translate (l10n) ("none")) (str)

                     return (
                       <Markdown source={`**${tag}:** ${val}`} />
                     )
                   })}
      {maybeRNullF (msrc)
                   (src => (
                     <WikiSource {...props} x={SrcObj ({ src })} acc={SrcObj.A} />
                   ))}
    </WikiBoxTemplate>
  )
}

const SrcObj = fromDefault ({ src: List<Record<SourceLink>> () })

const ensureNatural = bindF (ensure (gt (0)))