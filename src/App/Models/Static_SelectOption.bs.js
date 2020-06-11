// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Ley_Int$OptolithClient from "../../Data/Ley_Int.bs.js";
import * as Ley_Map$OptolithClient from "../../Data/Ley_Map.bs.js";
import * as Ley_List$OptolithClient from "../../Data/Ley_List.bs.js";
import * as JsonStrict$OptolithClient from "../Utilities/JsonStrict.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../../Data/Ley_Option.bs.js";
import * as Ley_Function$OptolithClient from "../../Data/Ley_Function.bs.js";
import * as Static_Erratum$OptolithClient from "./Static_Erratum.bs.js";
import * as Static_SourceRef$OptolithClient from "./Static_SourceRef.bs.js";
import * as Static_Prerequisites$OptolithClient from "./Static_Prerequisites.bs.js";

function outerToInt(id) {
  var variant = id[0];
  if (variant >= 61643255) {
    if (variant >= 345443720) {
      if (variant >= 797131559) {
        return 7;
      } else {
        return 4;
      }
    } else if (variant >= 290194801) {
      return 2;
    } else {
      return 1;
    }
  } else if (variant !== -841776939) {
    if (variant >= -384382742) {
      return 6;
    } else {
      return 3;
    }
  } else {
    return 5;
  }
}

function compare(x, y) {
  var x$prime = outerToInt(x);
  var y$prime = outerToInt(y);
  if (x$prime === y$prime) {
    return x[1] - y[1] | 0;
  } else {
    return x$prime - y$prime | 0;
  }
}

var Ord = {
  compare: compare
};

function showId(id) {
  var variant = id[0];
  if (variant >= 61643255) {
    if (variant >= 345443720) {
      if (variant >= 797131559) {
        return "Blessing(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
      } else {
        return "Spell(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
      }
    } else if (variant >= 290194801) {
      return "Skill(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
    } else {
      return "Generic(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
    }
  } else if (variant !== -841776939) {
    if (variant >= -384382742) {
      return "LiturgicalChant(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
    } else {
      return "CombatTechnique(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
    }
  } else {
    return "Cantrip(" + (Ley_Int$OptolithClient.show(id[1]) + ")");
  }
}

var SelectOptionMap = Ley_Map$OptolithClient.Make(Ord);

function tL10n(json) {
  return {
          id: Json_decode.field("id", Static_Prerequisites$OptolithClient.Decode.selectOptionId, json),
          name: Json_decode.field("name", Json_decode.string, json),
          description: JsonStrict$OptolithClient.optionalField("description", Json_decode.string, json),
          specializations: JsonStrict$OptolithClient.optionalField("specializations", (function (param) {
                  return Json_decode.list(Json_decode.string, param);
                }), json),
          specializationInput: JsonStrict$OptolithClient.optionalField("specializationInput", Json_decode.string, json),
          src: Json_decode.field("src", Static_SourceRef$OptolithClient.Decode.list, json),
          errata: Json_decode.field("errata", Static_Erratum$OptolithClient.Decode.list, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Static_Prerequisites$OptolithClient.Decode.selectOptionId, json),
          cost: JsonStrict$OptolithClient.optionalField("cost", Json_decode.$$int, json),
          prerequisites: Static_Prerequisites$OptolithClient.Decode.t(json),
          isSecret: JsonStrict$OptolithClient.optionalField("isSecret", Json_decode.bool, json),
          languages: JsonStrict$OptolithClient.optionalField("languages", (function (param) {
                  return Json_decode.list(Json_decode.$$int, param);
                }), json),
          continent: JsonStrict$OptolithClient.optionalField("continent", Json_decode.$$int, json),
          isExtinct: JsonStrict$OptolithClient.optionalField("isExtinct", Json_decode.bool, json),
          animalGr: JsonStrict$OptolithClient.optionalField("animalGr", Json_decode.$$int, json),
          animalLevel: JsonStrict$OptolithClient.optionalField("animalLevel", Json_decode.$$int, json)
        };
}

function t(univ, l10n) {
  return {
          id: univ.id,
          name: l10n.name,
          cost: univ.cost,
          prerequisites: univ.prerequisites,
          description: l10n.description,
          isSecret: univ.isSecret,
          languages: univ.languages,
          continent: univ.continent,
          isExtinct: univ.isExtinct,
          specializations: l10n.specializations,
          specializationInput: l10n.specializationInput,
          animalGr: univ.animalGr,
          animalLevel: univ.animalLevel,
          enhancementTarget: undefined,
          enhancementLevel: undefined,
          wikiEntry: undefined,
          src: l10n.src,
          errata: l10n.errata
        };
}

function category(json) {
  var str = Json_decode.string(json);
  switch (str) {
    case "BLESSINGS" :
        return /* Blessings */0;
    case "CANTRIPS" :
        return /* Cantrips */1;
    case "COMBAT_TECHNIQUES" :
        return /* CombatTechniques */2;
    case "LITURGICAL_CHANTS" :
        return /* LiturgicalChants */3;
    case "SKILLS" :
        return /* Skills */4;
    case "SPELLS" :
        return /* Spells */5;
    default:
      throw [
            Json_decode.DecodeError,
            "Unknown select option category: " + str
          ];
  }
}

function categoryWithGroups(json) {
  return {
          category: Json_decode.field("category", category, json),
          groups: JsonStrict$OptolithClient.optionalField("groups", (function (param) {
                  return Json_decode.list(Json_decode.$$int, param);
                }), json)
        };
}

function entryToSelectOption(id, name, wikiEntry, src, errata) {
  return {
          id: id,
          name: name,
          cost: undefined,
          prerequisites: Static_Prerequisites$OptolithClient.empty,
          description: undefined,
          isSecret: undefined,
          languages: undefined,
          continent: undefined,
          isExtinct: undefined,
          specializations: undefined,
          specializationInput: undefined,
          animalGr: undefined,
          animalLevel: undefined,
          enhancementTarget: undefined,
          enhancementLevel: undefined,
          wikiEntry: wikiEntry,
          src: src,
          errata: errata
        };
}

function insertEntry(s) {
  return Curry._2(SelectOptionMap.insert, s.id, s);
}

function resolveWithoutGroups(f, mp, xs) {
  return Curry._3(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                var s = Curry._1(f, x);
                return Curry._2(SelectOptionMap.insert, s.id, s);
              }), xs, mp);
}

function resolveGroups(f, g, grs, mp, xs) {
  return Curry._3(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                if (!Ley_List$OptolithClient.Foldable.elem(Curry._1(g, x), grs)) {
                  return Ley_Function$OptolithClient.id;
                }
                var s = Curry._1(f, x);
                return Curry._2(SelectOptionMap.insert, s.id, s);
              }), xs, mp);
}

function blessingToSelectOption(x) {
  return entryToSelectOption(/* `Blessing */[
              797131559,
              x.id
            ], x.name, /* Blessing */Block.__(0, [x]), x.src, x.errata);
}

function resolveBlessings(param, param$1) {
  return resolveWithoutGroups(blessingToSelectOption, param, param$1);
}

function cantripToSelectOption(x) {
  return entryToSelectOption(/* `Cantrip */[
              -841776939,
              x.id
            ], x.name, /* Cantrip */Block.__(1, [x]), x.src, x.errata);
}

function resolveCantrips(param, param$1) {
  return resolveWithoutGroups(cantripToSelectOption, param, param$1);
}

function combatTechniqueToSelectOption(x) {
  return entryToSelectOption(/* `CombatTechnique */[
              -920806756,
              x.id
            ], x.name, /* CombatTechnique */Block.__(2, [x]), x.src, x.errata);
}

function resolveCombatTechniques(mgrs) {
  if (mgrs !== undefined) {
    return (function (param, param$1) {
        return resolveGroups(combatTechniqueToSelectOption, (function (x) {
                      return x.gr;
                    }), mgrs, param, param$1);
      });
  } else {
    return (function (param, param$1) {
        return resolveWithoutGroups(combatTechniqueToSelectOption, param, param$1);
      });
  }
}

function liturgicalChantToSelectOption(x) {
  return entryToSelectOption(/* `LiturgicalChant */[
              -384382742,
              x.id
            ], x.name, /* LiturgicalChant */Block.__(3, [x]), x.src, x.errata);
}

function resolveLiturgicalChants(mgrs) {
  if (mgrs !== undefined) {
    return (function (param, param$1) {
        return resolveGroups(liturgicalChantToSelectOption, (function (x) {
                      return x.gr;
                    }), mgrs, param, param$1);
      });
  } else {
    return (function (param, param$1) {
        return resolveWithoutGroups(liturgicalChantToSelectOption, param, param$1);
      });
  }
}

function skillToSelectOption(x) {
  return entryToSelectOption(/* `Skill */[
              290194801,
              x.id
            ], x.name, /* Skill */Block.__(4, [x]), x.src, x.errata);
}

function resolveSkills(mgrs) {
  if (mgrs !== undefined) {
    return (function (param, param$1) {
        return resolveGroups(skillToSelectOption, (function (x) {
                      return x.gr;
                    }), mgrs, param, param$1);
      });
  } else {
    return (function (param, param$1) {
        return resolveWithoutGroups(skillToSelectOption, param, param$1);
      });
  }
}

function spellToSelectOption(x) {
  return entryToSelectOption(/* `Spell */[
              345443720,
              x.id
            ], x.name, /* Spell */Block.__(5, [x]), x.src, x.errata);
}

function resolveSpells(mgrs) {
  if (mgrs !== undefined) {
    return (function (param, param$1) {
        return resolveGroups(spellToSelectOption, (function (x) {
                      return x.gr;
                    }), mgrs, param, param$1);
      });
  } else {
    return (function (param, param$1) {
        return resolveWithoutGroups(spellToSelectOption, param, param$1);
      });
  }
}

function resolveCategories(blessings, cantrips, combatTechniques, liturgicalChants, skills, spells, categories) {
  return Ley_List$OptolithClient.Foldable.foldr((function (cat) {
                var match = cat.category;
                switch (match) {
                  case /* Blessings */0 :
                      return (function (param) {
                          return resolveBlessings(blessings, param);
                        });
                  case /* Cantrips */1 :
                      return (function (param) {
                          return resolveCantrips(cantrips, param);
                        });
                  case /* CombatTechniques */2 :
                      var partial_arg = resolveCombatTechniques(cat.groups);
                      return (function (param) {
                          return partial_arg(combatTechniques, param);
                        });
                  case /* LiturgicalChants */3 :
                      var partial_arg$1 = resolveLiturgicalChants(cat.groups);
                      return (function (param) {
                          return partial_arg$1(liturgicalChants, param);
                        });
                  case /* Skills */4 :
                      var partial_arg$2 = resolveSkills(cat.groups);
                      return (function (param) {
                          return partial_arg$2(skills, param);
                        });
                  case /* Spells */5 :
                      var partial_arg$3 = resolveSpells(cat.groups);
                      return (function (param) {
                          return partial_arg$3(spells, param);
                        });
                  
                }
              }), SelectOptionMap.empty, Ley_Option$OptolithClient.fromOption(/* [] */0, categories));
}

function l10nToSelectOption(l10n) {
  return {
          id: l10n.id,
          name: l10n.name,
          cost: undefined,
          prerequisites: Static_Prerequisites$OptolithClient.empty,
          description: l10n.description,
          isSecret: undefined,
          languages: undefined,
          continent: undefined,
          isExtinct: undefined,
          specializations: l10n.specializations,
          specializationInput: l10n.specializationInput,
          animalGr: undefined,
          animalLevel: undefined,
          enhancementTarget: undefined,
          enhancementLevel: undefined,
          wikiEntry: undefined,
          src: l10n.src,
          errata: l10n.errata
        };
}

function mergeUnivIntoSelectOption(univ, x) {
  return {
          id: x.id,
          name: x.name,
          cost: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.cost, x.cost),
          prerequisites: univ.prerequisites,
          description: x.description,
          isSecret: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.isSecret, x.isSecret),
          languages: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.languages, x.languages),
          continent: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.continent, x.continent),
          isExtinct: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.isExtinct, x.isExtinct),
          specializations: x.specializations,
          specializationInput: x.specializationInput,
          animalGr: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.animalGr, x.animalGr),
          animalLevel: Ley_Option$OptolithClient.Alternative.$less$pipe$great(univ.animalLevel, x.animalLevel),
          enhancementTarget: x.enhancementTarget,
          enhancementLevel: x.enhancementLevel,
          wikiEntry: x.wikiEntry,
          src: x.src,
          errata: x.errata
        };
}

function mergeSelectOptions(ml10ns, munivs, fromCategories) {
  return Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (univs, mp) {
                    return Ley_List$OptolithClient.Foldable.foldr((function (univ, mp$prime) {
                                  return Curry._3(SelectOptionMap.adjust, (function (param) {
                                                return mergeUnivIntoSelectOption(univ, param);
                                              }), univ.id, mp$prime);
                                }), mp, univs);
                  }), munivs), Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (l10ns, mp) {
                        return Ley_List$OptolithClient.Foldable.foldr((function (l10n, mp$prime) {
                                      if (Curry._2(SelectOptionMap.member, l10n.id, mp$prime)) {
                                        throw [
                                              Json_decode.DecodeError,
                                              "mergeSelectOptions: Key " + (showId(l10n.id) + "already in use")
                                            ];
                                      }
                                      return Curry._3(SelectOptionMap.insert, l10n.id, l10nToSelectOption(l10n), mp$prime);
                                    }), mp, l10ns);
                      }), ml10ns), fromCategories));
}

var Decode = {
  tL10n: tL10n,
  tUniv: tUniv,
  t: t,
  category: category,
  categoryWithGroups: categoryWithGroups,
  entryToSelectOption: entryToSelectOption,
  insertEntry: insertEntry,
  resolveWithoutGroups: resolveWithoutGroups,
  resolveGroups: resolveGroups,
  blessingToSelectOption: blessingToSelectOption,
  resolveBlessings: resolveBlessings,
  cantripToSelectOption: cantripToSelectOption,
  resolveCantrips: resolveCantrips,
  combatTechniqueToSelectOption: combatTechniqueToSelectOption,
  resolveCombatTechniques: resolveCombatTechniques,
  liturgicalChantToSelectOption: liturgicalChantToSelectOption,
  resolveLiturgicalChants: resolveLiturgicalChants,
  skillToSelectOption: skillToSelectOption,
  resolveSkills: resolveSkills,
  spellToSelectOption: spellToSelectOption,
  resolveSpells: resolveSpells,
  resolveCategories: resolveCategories,
  l10nToSelectOption: l10nToSelectOption,
  mergeUnivIntoSelectOption: mergeUnivIntoSelectOption,
  mergeSelectOptions: mergeSelectOptions
};

export {
  Ord ,
  showId ,
  SelectOptionMap ,
  Decode ,
  
}
/* SelectOptionMap Not a pure module */
