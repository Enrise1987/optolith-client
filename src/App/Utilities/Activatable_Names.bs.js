// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Id$OptolithClient from "../Constants/Id.bs.js";
import * as Intl$OptolithClient from "./Intl.bs.js";
import * as Chars$OptolithClient from "./Chars.bs.js";
import * as Ley_Int$OptolithClient from "../../Data/Ley_Int.bs.js";
import * as Integers$OptolithClient from "./Integers.bs.js";
import * as Ley_List$OptolithClient from "../../Data/Ley_List.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../../Data/Ley_Option.bs.js";
import * as Ley_Function$OptolithClient from "../../Data/Ley_Function.bs.js";
import * as AdvancedFiltering$OptolithClient from "./AdvancedFiltering.bs.js";
import * as Static_SelectOption$OptolithClient from "../Models/Static_SelectOption.bs.js";
import * as Activatable_Accessors$OptolithClient from "./Activatable_Accessors.bs.js";
import * as Activatable_SelectOptions$OptolithClient from "./Activatable_SelectOptions.bs.js";

function getDefaultNameAddition(staticEntry, heroEntry) {
  var input = Activatable_Accessors$OptolithClient.input(staticEntry);
  var selectOptions = Activatable_Accessors$OptolithClient.selectOptions(staticEntry);
  var sid = Activatable_SelectOptions$OptolithClient.getOption1(heroEntry);
  var sid2 = Activatable_SelectOptions$OptolithClient.getOption2(heroEntry);
  if (input !== undefined) {
    if (sid === undefined) {
      return ;
    }
    if (typeof sid === "number") {
      return ;
    }
    var variant = sid[0];
    if (variant >= 61643256) {
      if (variant >= 345443721) {
        if (variant !== 797131559) {
          if (variant !== 931971705 || sid2 !== undefined) {
            return ;
          } else {
            return sid[1];
          }
        }
        
      } else if (variant !== 290194801 && variant < 345443720) {
        return ;
      }
      
    } else if (variant >= -841776938) {
      if (variant !== -384382742 && variant < 61643255) {
        return ;
      }
      
    } else if (variant !== -920806756 && variant < -841776939) {
      return ;
    }
    if (sid2 !== undefined && !(typeof sid2 === "number" || sid2[0] !== 931971705 || Curry._1(Static_SelectOption$OptolithClient.SelectOptionMap.size, selectOptions) <= 0)) {
      return Ley_Option$OptolithClient.fromOption("", Activatable_SelectOptions$OptolithClient.getSelectOptionName(staticEntry, sid)) + (": " + sid2[1]);
    } else {
      return ;
    }
  }
  if (sid === undefined) {
    return ;
  }
  if (typeof sid === "number") {
    return ;
  }
  var variant$1 = sid[0];
  if (variant$1 >= 61643255) {
    if (variant$1 >= 345443720) {
      if (variant$1 !== 797131559 && variant$1 >= 345443721) {
        return ;
      }
      
    } else if (variant$1 !== 290194801 && variant$1 >= 61643256) {
      return ;
    }
    
  } else if (variant$1 !== -920806756 && variant$1 !== -841776939 && variant$1 !== -384382742) {
    return ;
  }
  if (sid2 !== undefined) {
    return ;
  } else {
    return Activatable_SelectOptions$OptolithClient.getSelectOptionName(staticEntry, sid);
  }
}

function getEntrySpecificNameAddition(staticData, staticEntry, heroEntry) {
  switch (staticEntry.tag | 0) {
    case /* Advantage */0 :
        var match = Id$OptolithClient.advantageFromInt(staticEntry[0].id);
        var exit = 0;
        if (typeof match !== "number") {
          return getDefaultNameAddition(staticEntry, heroEntry);
        }
        if (match >= 22) {
          return getDefaultNameAddition(staticEntry, heroEntry);
        }
        switch (match) {
          case /* Aptitude */0 :
          case /* ExceptionalSkill */4 :
              exit = 1;
              break;
          case /* ExceptionalCombatTechnique */5 :
          case /* WeaponAptitude */17 :
              exit = 2;
              break;
          case /* Nimble */1 :
          case /* Blessed */2 :
          case /* Luck */3 :
          case /* IncreasedAstralPower */6 :
          case /* IncreasedKarmaPoints */7 :
          case /* IncreasedLifePoints */8 :
          case /* IncreasedSpirit */9 :
          case /* IncreasedToughness */10 :
          case /* ImmunityToPoison */11 :
          case /* ImmunityToDisease */12 :
          case /* MagicalAttunement */13 :
          case /* Rich */14 :
          case /* SociallyAdaptable */15 :
          case /* InspireConfidence */16 :
          case /* Spellcaster */18 :
          case /* Unyielding */19 :
          case /* LargeSpellSelection */20 :
              return getDefaultNameAddition(staticEntry, heroEntry);
          case /* HatredFor */21 :
              return Ley_Option$OptolithClient.Monad.liftM2((function (type_, frequency) {
                            return type_ + (" (" + (frequency.name + ")"));
                          }), Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption2(heroEntry), Activatable_SelectOptions$OptolithClient.getCustomInput), Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                                return Activatable_SelectOptions$OptolithClient.getSelectOption(staticEntry, param);
                              })));
          
        }
        switch (exit) {
          case 1 :
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (sid) {
                            var variant = sid[0];
                            if (variant !== -384382742) {
                              if (variant !== 290194801) {
                                if (variant !== 345443720) {
                                  return ;
                                } else {
                                  return Activatable_SelectOptions$OptolithClient.lookupMap(sid[1], staticData.spells, (function (x) {
                                                return x.name;
                                              }));
                                }
                              } else {
                                return Activatable_SelectOptions$OptolithClient.lookupMap(sid[1], staticData.skills, (function (x) {
                                              return x.name;
                                            }));
                              }
                            } else {
                              return Activatable_SelectOptions$OptolithClient.lookupMap(sid[1], staticData.liturgicalChants, (function (x) {
                                            return x.name;
                                          }));
                            }
                          }));
          case 2 :
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (sid) {
                            if (sid[0] >= -841776939) {
                              return ;
                            } else {
                              return Activatable_SelectOptions$OptolithClient.lookupMap(sid[1], staticData.combatTechniques, (function (x) {
                                            return x.name;
                                          }));
                            }
                          }));
          
        }
        break;
    case /* Disadvantage */1 :
        var match$1 = Id$OptolithClient.disadvantageFromInt(staticEntry[0].id);
        if (typeof match$1 === "number") {
          if (match$1 !== 12) {
            if (match$1 !== 18) {
              return getDefaultNameAddition(staticEntry, heroEntry);
            } else {
              return Ley_Option$OptolithClient.Functor.$less$amp$great(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                                return Activatable_SelectOptions$OptolithClient.getSkillFromOption(staticData, param);
                              })), (function (x) {
                            return x.name;
                          }));
            }
          } else {
            return Ley_Option$OptolithClient.Functor.$less$amp$great(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                              return Activatable_SelectOptions$OptolithClient.getSelectOption(staticEntry, param);
                            })), (function (option1) {
                          var match = option1.id;
                          return Ley_Option$OptolithClient.option(option1.name, (function (specialInput) {
                                        return option1.name + (": " + specialInput);
                                      }), match[0] !== 61643255 || (match[1] - 7 >>> 0) > 1 ? undefined : Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption2(heroEntry), Activatable_SelectOptions$OptolithClient.getCustomInput));
                        }));
          }
        } else {
          return getDefaultNameAddition(staticEntry, heroEntry);
        }
    case /* SpecialAbility */2 :
        var match$2 = Id$OptolithClient.specialAbilityFromInt(staticEntry[0].id);
        var exit$1 = 0;
        if (typeof match$2 !== "number") {
          return getDefaultNameAddition(staticEntry, heroEntry);
        }
        var exit$2 = 0;
        if (match$2 >= 71) {
          if (match$2 !== 85) {
            if (match$2 >= 72) {
              return getDefaultNameAddition(staticEntry, heroEntry);
            } else {
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.join(Ley_Option$OptolithClient.Monad.liftM2(Activatable_SelectOptions$OptolithClient.getSelectOption, Ley_Option$OptolithClient.Functor.$less$amp$great(Curry._2(Ley_IntMap$OptolithClient.lookup, Id$OptolithClient.specialAbilityToInt(/* Language */6), staticData.specialAbilities), (function (specialAbility) {
                                        return /* SpecialAbility */Block.__(2, [specialAbility]);
                                      })), Activatable_SelectOptions$OptolithClient.getOption1(heroEntry))), (function (language) {
                            return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption2(heroEntry), (function (option2) {
                                          var variant = option2[0];
                                          var tmp;
                                          if (variant !== 61643255) {
                                            tmp = variant >= 931971705 ? option2[1] : undefined;
                                          } else {
                                            var specializationId = option2[1];
                                            tmp = Ley_Option$OptolithClient.Monad.$great$great$eq(language.specializations, (function (specializations) {
                                                    return Ley_List$OptolithClient.Safe.atMay(specializations, specializationId - 1 | 0);
                                                  }));
                                          }
                                          return Ley_Option$OptolithClient.Functor.$less$amp$great(tmp, (function (specialization) {
                                                        return language.name + (": " + specialization);
                                                      }));
                                        }));
                          }));
            }
          } else {
            return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                              return Activatable_SelectOptions$OptolithClient.getSkillFromOption(staticData, param);
                            })), (function (skill) {
                          var applications = Curry._2(Ley_IntMap$OptolithClient.filter, (function (app) {
                                  return Ley_Option$OptolithClient.isNone(app.prerequisite);
                                }), skill.applications);
                          return Ley_Option$OptolithClient.Functor.$less$amp$great(Ley_Option$OptolithClient.ensure((function (apps) {
                                            return 2 === Ley_List$OptolithClient.Foldable.length(apps);
                                          }), Ley_Option$OptolithClient.mapOption((function (option) {
                                                return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(option, Activatable_SelectOptions$OptolithClient.getGenericId), (function (opt) {
                                                              return Ley_Option$OptolithClient.Functor.$less$amp$great(Curry._2(Ley_IntMap$OptolithClient.Foldable.find, (function (app) {
                                                                                return app.id === opt;
                                                                              }), applications), (function (app) {
                                                                            return app.name;
                                                                          }));
                                                            }));
                                              }), /* :: */[
                                              Activatable_SelectOptions$OptolithClient.getOption2(heroEntry),
                                              /* :: */[
                                                Activatable_SelectOptions$OptolithClient.getOption3(heroEntry),
                                                /* [] */0
                                              ]
                                            ])), (function (apps) {
                                        var appsStr = Intl$OptolithClient.ListFormat.format(/* Conjunction */0, staticData, AdvancedFiltering$OptolithClient.sortStrings(staticData, apps));
                                        return skill.name + (": " + appsStr);
                                      }));
                        }));
          }
        }
        if (match$2 < 16) {
          if (match$2 !== 0) {
            return getDefaultNameAddition(staticEntry, heroEntry);
          } else {
            return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                              return Activatable_SelectOptions$OptolithClient.getSkillFromOption(staticData, param);
                            })), (function (skill) {
                          return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption2(heroEntry), (function (option2) {
                                        var variant = option2[0];
                                        var tmp;
                                        if (variant !== 61643255) {
                                          tmp = variant >= 931971705 ? option2[1] : undefined;
                                        } else {
                                          var id = option2[1];
                                          tmp = Ley_Option$OptolithClient.Functor.$less$amp$great(Curry._2(Ley_IntMap$OptolithClient.Foldable.find, (function (a) {
                                                      return a.id === id;
                                                    }), skill.applications), (function (a) {
                                                  return a.name;
                                                }));
                                        }
                                        return Ley_Option$OptolithClient.Functor.$less$amp$great(tmp, (function (appName) {
                                                      return skill.name + (": " + appName);
                                                    }));
                                      }));
                        }));
          }
        }
        if (match$2 >= 53) {
          return getDefaultNameAddition(staticEntry, heroEntry);
        }
        switch (match$2 - 16 | 0) {
          case /* TerrainKnowledge */1 :
              var match$3 = heroEntry.level;
              if (match$3 === 1) {
                return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                              return Activatable_SelectOptions$OptolithClient.getSelectOptionName(staticEntry, param);
                            }));
              } else {
                return ;
              }
          case /* SkillSpecialization */0 :
          case /* CraftInstruments */2 :
              exit$1 = 1;
              break;
          case /* SpellEnhancement */25 :
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (sid) {
                            if (sid[0] !== -384382742) {
                              return ;
                            } else {
                              return Activatable_SelectOptions$OptolithClient.lookupMap(sid[1], staticData.liturgicalChants, (function (x) {
                                            return x.name;
                                          }));
                            }
                          }));
          case /* TraditionGuildMages */9 :
          case /* PredigtDerGemeinschaft */30 :
              exit$2 = 3;
              break;
          case /* PredigtDesWohlgefallens */33 :
              var partial_arg = staticData.arcaneBardTraditions;
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), Activatable_SelectOptions$OptolithClient.getGenericId), (function (param) {
                            return Ley_Function$OptolithClient.flip(Ley_IntMap$OptolithClient.lookup, partial_arg, param);
                          }));
          case /* PredigtWiderMissgeschicke */34 :
              var partial_arg$1 = staticData.arcaneDancerTraditions;
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), Activatable_SelectOptions$OptolithClient.getGenericId), (function (param) {
                            return Ley_Function$OptolithClient.flip(Ley_IntMap$OptolithClient.lookup, partial_arg$1, param);
                          }));
          case /* Hunter */3 :
          case /* AreaKnowledge */4 :
          case /* Literacy */5 :
          case /* Language */6 :
          case /* CombatReflexes */7 :
          case /* ImprovedDodge */8 :
          case /* Feuerschlucker */14 :
          case /* CombatStyleCombination */15 :
          case /* AdaptionZauber */16 :
          case /* Exorzist */17 :
          case /* FavoriteSpellwork */18 :
          case /* TraditionWitches */19 :
          case /* MagicStyleCombination */20 :
          case /* Harmoniezauberei */21 :
          case /* Matrixzauberei */22 :
          case /* TraditionElves */23 :
          case /* TraditionDruids */24 :
          case /* Forschungsgebiet */26 :
          case /* Expertenwissen */27 :
          case /* Wissensdurst */28 :
          case /* Recherchegespuer */29 :
          case /* PredigtDerZuversicht */31 :
          case /* PredigtDesGottvertrauens */32 :
          case /* VisionDerBestimmung */35 :
              return getDefaultNameAddition(staticEntry, heroEntry);
          case /* PropertyKnowledge */10 :
          case /* PropertyFocus */11 :
          case /* AspectKnowledge */12 :
          case /* TraditionChurchOfPraios */13 :
          case /* VisionDerEntrueckung */36 :
              exit$1 = 2;
              break;
          
        }
        if (exit$2 === 3) {
          return Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                            return Activatable_SelectOptions$OptolithClient.getSelectOption(staticEntry, param);
                          })), (function (enhancement) {
                        return Ley_Option$OptolithClient.Monad.$great$great$eq(enhancement.enhancementTarget, (function (id) {
                                      var tmp;
                                      var exit = 0;
                                      if (typeof match$2 === "number" && match$2 === 25) {
                                        tmp = Ley_Option$OptolithClient.Functor.$less$amp$great(Curry._2(Ley_IntMap$OptolithClient.lookup, id, staticData.spells), (function (x) {
                                                return x.name;
                                              }));
                                      } else {
                                        exit = 1;
                                      }
                                      if (exit === 1) {
                                        tmp = Ley_Option$OptolithClient.Functor.$less$amp$great(Curry._2(Ley_IntMap$OptolithClient.lookup, id, staticData.liturgicalChants), (function (x) {
                                                return x.name;
                                              }));
                                      }
                                      return Ley_Option$OptolithClient.Functor.$less$amp$great(tmp, (function (targetName) {
                                                    return targetName + (": " + enhancement.name);
                                                  }));
                                    }));
                      }));
        }
        switch (exit$1) {
          case 1 :
              return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (sid) {
                            if (sid[0] !== 345443720) {
                              return ;
                            } else {
                              return Activatable_SelectOptions$OptolithClient.lookupMap(sid[1], staticData.spells, (function (x) {
                                            return x.name;
                                          }));
                            }
                          }));
          case 2 :
              return Ley_Option$OptolithClient.Functor.$less$amp$great(Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_SelectOptions$OptolithClient.getOption1(heroEntry), (function (param) {
                                return Activatable_SelectOptions$OptolithClient.getSkillFromOption(staticData, param);
                              })), (function (x) {
                            return x.name;
                          }));
          
        }
        break;
    
  }
}

function getDisAdvLevelStr(level) {
  return Ley_Option$OptolithClient.fromOption(Ley_Int$OptolithClient.show(level), Integers$OptolithClient.intToRoman(level));
}

function getSpecialAbilityLevelStr(level) {
  return (
          level > 1 ? "I" + (Chars$OptolithClient.nobr + ("\xe2\x80\x93" + Chars$OptolithClient.nobr)) : ""
        ) + getDisAdvLevelStr(level);
}

function getLevelName(staticData, staticEntry, singleHeroEntry) {
  var match = singleHeroEntry.level;
  switch (staticEntry.tag | 0) {
    case /* Advantage */0 :
    case /* Disadvantage */1 :
        if (match !== undefined) {
          return getDisAdvLevelStr(match);
        } else {
          return ;
        }
    case /* SpecialAbility */2 :
        if (match === undefined) {
          return ;
        }
        var match$1 = Id$OptolithClient.specialAbilityFromInt(staticEntry[0].id);
        if (typeof match$1 === "number" && !(match$1 !== 6 || match !== 4)) {
          return staticData.messages.specialabilities_nativetonguelevel;
        } else {
          return getSpecialAbilityLevelStr(match);
        }
    
  }
}

function getEntrySpecificNameReplacements(addLevelToName, staticEntry, nameAddition, levelName) {
  var name = Activatable_Accessors$OptolithClient.name(staticEntry);
  var flatLevelName = addLevelToName ? Ley_Option$OptolithClient.option("", (function (param) {
            return Chars$OptolithClient.nbsp + param;
          }), levelName) : "";
  var mapDefaultWithParens = function (param) {
    return Ley_Option$OptolithClient.option(name, (function (add) {
                  return name + (" (" + (add + ")"));
                }), nameAddition);
  };
  var mapDefaultWithoutParens = function (param) {
    return Ley_Option$OptolithClient.option(name, (function (add) {
                  return name + (" " + add);
                }), nameAddition);
  };
  var addSndInParens = function (snd) {
    var partial_arg = ": " + (snd + ")");
    return (function (param) {
        return Ley_List$OptolithClient.Extra.replaceStr(")", partial_arg, param);
      });
  };
  switch (staticEntry.tag | 0) {
    case /* Advantage */0 :
        var match = Id$OptolithClient.advantageFromInt(staticEntry[0].id);
        if (typeof match === "number") {
          if (match >= 13) {
            if (match !== 21) {
              return mapDefaultWithParens(undefined) + flatLevelName;
            } else {
              return mapDefaultWithoutParens(undefined);
            }
          } else if (match >= 11) {
            return mapDefaultWithoutParens(undefined);
          } else {
            return mapDefaultWithParens(undefined) + flatLevelName;
          }
        } else {
          return mapDefaultWithParens(undefined) + flatLevelName;
        }
    case /* Disadvantage */1 :
        var match$1 = Id$OptolithClient.disadvantageFromInt(staticEntry[0].id);
        if (typeof match$1 !== "number") {
          return mapDefaultWithParens(undefined) + flatLevelName;
        }
        var switcher = match$1 - 13 | 0;
        if (switcher > 6 || switcher < 0) {
          if (switcher >= -12) {
            return mapDefaultWithParens(undefined) + flatLevelName;
          } else {
            return mapDefaultWithoutParens(undefined) + flatLevelName;
          }
        } else if (switcher > 5 || switcher < 1) {
          return Ley_Option$OptolithClient.option(name + flatLevelName, (function (nameAddition) {
                        return name + (flatLevelName + (" (" + (nameAddition + ")")));
                      }), nameAddition);
        } else {
          return mapDefaultWithParens(undefined) + flatLevelName;
        }
    case /* SpecialAbility */2 :
        var match$2 = Id$OptolithClient.specialAbilityFromInt(staticEntry[0].id);
        if (typeof match$2 !== "number") {
          return mapDefaultWithParens(undefined) + flatLevelName;
        }
        switch (match$2) {
          case /* GebieterDesAspekts */45 :
              return mapDefaultWithoutParens(undefined);
          case /* TraditionArcaneBard */49 :
              return Ley_Option$OptolithClient.option(name, (function (param) {
                            return Ley_Function$OptolithClient.flip(addSndInParens, name, param);
                          }), nameAddition);
          case /* TraditionArcaneDancer */50 :
              return Ley_Option$OptolithClient.option(name, (function (param) {
                            return Ley_Function$OptolithClient.flip(addSndInParens, name, param);
                          }), nameAddition);
          case /* ChantEnhancement */46 :
          case /* DunklesAbbildDerBuendnisgabe */47 :
          case /* TraditionIllusionist */48 :
          case /* TraditionIntuitiveMage */51 :
              return mapDefaultWithParens(undefined) + flatLevelName;
          case /* TraditionSavant */52 :
              return Ley_Option$OptolithClient.option(name, (function (param) {
                            return Ley_Function$OptolithClient.flip(addSndInParens, name, param);
                          }), nameAddition);
          default:
            return mapDefaultWithParens(undefined) + flatLevelName;
        }
    
  }
}

function getName(addLevelToName, staticData, staticEntry, heroEntry) {
  var addName = getEntrySpecificNameAddition(staticData, staticEntry, heroEntry);
  var levelName = getLevelName(staticData, staticEntry, heroEntry);
  var fullName = getEntrySpecificNameReplacements(addLevelToName, staticEntry, addName, levelName);
  return {
          name: fullName,
          baseName: Activatable_Accessors$OptolithClient.name(staticEntry),
          addName: addName,
          levelName: levelName
        };
}

export {
  getName ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
