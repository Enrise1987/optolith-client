// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Caml_obj from "bs-platform/lib/es6/caml_obj.js";
import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Id$OptolithClient from "../Constants/Id.bs.js";
import * as Ley_Ix$OptolithClient from "../../Data/Ley_Ix.bs.js";
import * as Ley_Int$OptolithClient from "../../Data/Ley_Int.bs.js";
import * as Ley_List$OptolithClient from "../../Data/Ley_List.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../../Data/Ley_Option.bs.js";
import * as Activatable$OptolithClient from "./Activatable.bs.js";
import * as Ley_Function$OptolithClient from "../../Data/Ley_Function.bs.js";
import * as Static_SelectOption$OptolithClient from "../Models/Static_SelectOption.bs.js";

function applicablePred(oldLevel, newLevel) {
  var level;
  if (oldLevel !== undefined) {
    if (newLevel !== undefined) {
      var match = Ley_Int$OptolithClient.minmax(oldLevel, newLevel);
      var partial_arg_000 = match[0] + 1 | 0;
      var partial_arg_001 = match[1];
      var partial_arg = /* tuple */[
        partial_arg_000,
        partial_arg_001
      ];
      return (function (param) {
          return Ley_Ix$OptolithClient.inRange(partial_arg, param);
        });
    }
    level = oldLevel;
  } else {
    if (newLevel === undefined) {
      return (function (param) {
          return Ley_Function$OptolithClient.$$const(true, param);
        });
    }
    level = newLevel;
  }
  return (function (param) {
      return level >= param;
    });
}

function filterApplicableLevels(oldLevel, newLevel, mp) {
  var pred = applicablePred(oldLevel, newLevel);
  return Curry._2(Ley_IntMap$OptolithClient.filterWithKey, (function (k, param) {
                return Curry._1(pred, k);
              }), mp);
}

function flattenPrerequisiteLevel(p, xs) {
  var xs$1 = Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (x) {
              var partial_arg = /* PrimaryAttribute */Block.__(6, [x]);
              return (function (param) {
                  return Ley_List$OptolithClient.cons(partial_arg, param);
                });
            }), p.primaryAttribute), Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (x) {
                  var partial_arg = /* Pact */Block.__(4, [x]);
                  return (function (param) {
                      return Ley_List$OptolithClient.cons(partial_arg, param);
                    });
                }), p.pact), Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (x) {
                      var partial_arg = /* Culture */Block.__(3, [x]);
                      return (function (param) {
                          return Ley_List$OptolithClient.cons(partial_arg, param);
                        });
                    }), p.culture), Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (x) {
                          var partial_arg = /* Race */Block.__(2, [x]);
                          return (function (param) {
                              return Ley_List$OptolithClient.cons(partial_arg, param);
                            });
                        }), p.race), Curry._1(Ley_Option$OptolithClient.option(Ley_Function$OptolithClient.id, (function (x) {
                              var partial_arg = /* Sex */Block.__(1, [x]);
                              return (function (param) {
                                  return Ley_List$OptolithClient.cons(partial_arg, param);
                                });
                            }), p.sex), xs)))));
  var xs$2 = Ley_List$OptolithClient.Foldable.foldr((function (x) {
          var partial_arg = /* Activatable */Block.__(7, [x]);
          return (function (param) {
              return Ley_List$OptolithClient.cons(partial_arg, param);
            });
        }), xs$1, p.activatable);
  var xs$3 = Ley_List$OptolithClient.Foldable.foldr((function (x) {
          var partial_arg = /* ActivatableMultiEntry */Block.__(8, [x]);
          return (function (param) {
              return Ley_List$OptolithClient.cons(partial_arg, param);
            });
        }), xs$2, p.activatableMultiEntry);
  var xs$4 = Ley_List$OptolithClient.Foldable.foldr((function (x) {
          var partial_arg = /* ActivatableMultiSelect */Block.__(9, [x]);
          return (function (param) {
              return Ley_List$OptolithClient.cons(partial_arg, param);
            });
        }), xs$3, p.activatableMultiSelect);
  var xs$5 = Ley_List$OptolithClient.Foldable.foldr((function (x) {
          var partial_arg = /* Increasable */Block.__(10, [x]);
          return (function (param) {
              return Ley_List$OptolithClient.cons(partial_arg, param);
            });
        }), xs$4, p.increasable);
  return Ley_List$OptolithClient.Foldable.foldr((function (x) {
                var partial_arg = /* IncreasableMultiEntry */Block.__(11, [x]);
                return (function (param) {
                    return Ley_List$OptolithClient.cons(partial_arg, param);
                  });
              }), xs$5, p.increasableMultiEntry);
}

function getFirstLevelPrerequisites(prerequisites) {
  return flattenPrerequisiteLevel({
              sex: prerequisites.sex,
              race: prerequisites.race,
              culture: prerequisites.culture,
              pact: prerequisites.pact,
              social: prerequisites.social,
              primaryAttribute: prerequisites.primaryAttribute,
              activatable: prerequisites.activatable,
              activatableMultiEntry: prerequisites.activatableMultiEntry,
              activatableMultiSelect: prerequisites.activatableMultiSelect,
              increasable: prerequisites.increasable,
              increasableMultiEntry: prerequisites.increasableMultiEntry
            }, /* [] */0);
}

function getFirstDisAdvLevelPrerequisites(p) {
  return Ley_List$OptolithClient.cons(/* CommonSuggestedByRCP */Block.__(0, [p.commonSuggestedByRCP]), flattenPrerequisiteLevel({
                  sex: p.sex,
                  race: p.race,
                  culture: p.culture,
                  pact: p.pact,
                  social: p.social,
                  primaryAttribute: p.primaryAttribute,
                  activatable: p.activatable,
                  activatableMultiEntry: p.activatableMultiEntry,
                  activatableMultiSelect: p.activatableMultiSelect,
                  increasable: p.increasable,
                  increasableMultiEntry: p.increasableMultiEntry
                }, /* [] */0));
}

function flattenPrerequisites(oldLevel, newLevel, prerequisites) {
  if (Curry._1(Ley_IntMap$OptolithClient.$$null, prerequisites.levels)) {
    return getFirstLevelPrerequisites(prerequisites);
  } else {
    return Curry._3(Ley_IntMap$OptolithClient.Foldable.foldr, flattenPrerequisiteLevel, getFirstLevelPrerequisites(prerequisites), filterApplicableLevels(oldLevel, newLevel, prerequisites.levels));
  }
}

var Flatten = {
  applicablePred: applicablePred,
  filterApplicableLevels: filterApplicableLevels,
  flattenPrerequisiteLevel: flattenPrerequisiteLevel,
  getFirstLevelPrerequisites: getFirstLevelPrerequisites,
  getFirstDisAdvLevelPrerequisites: getFirstDisAdvLevelPrerequisites,
  flattenPrerequisites: flattenPrerequisites
};

function getEntrySpecificDynamicPrerequisites(isEntryToAdd, staticData, staticEntry, heroEntry, singleEntry) {
  var sid = Activatable$OptolithClient.getOption1(singleEntry);
  var sid2 = Activatable$OptolithClient.getOption2(singleEntry);
  switch (staticEntry.tag | 0) {
    case /* Advantage */0 :
        var match = Id$OptolithClient.advantageFromInt(staticEntry[0].id);
        if (typeof match === "number") {
          if (match < 5) {
            if (match > 3 || match < 1) {
              return /* :: */[
                      /* Activatable */Block.__(7, [{
                            id: /* `Disadvantage */[
                              255955901,
                              Id$OptolithClient.disadvantageToInt(/* Incompetent */18)
                            ],
                            active: false,
                            sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                            sid2: undefined,
                            level: undefined
                          }]),
                      /* [] */0
                    ];
            } else {
              return /* [] */0;
            }
          } else if (match !== 13) {
            return /* [] */0;
          } else {
            return /* :: */[
                    /* Activatable */Block.__(7, [{
                          id: /* `Disadvantage */[
                            255955901,
                            Id$OptolithClient.disadvantageToInt(/* MagicalRestriction */5)
                          ],
                          active: false,
                          sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                          sid2: undefined,
                          level: undefined
                        }]),
                    /* [] */0
                  ];
          }
        } else {
          return /* [] */0;
        }
    case /* Disadvantage */1 :
        var match$1 = Id$OptolithClient.disadvantageFromInt(staticEntry[0].id);
        if (typeof match$1 === "number") {
          if (match$1 !== 5) {
            if (match$1 !== 18) {
              return /* [] */0;
            } else {
              return /* :: */[
                      /* Activatable */Block.__(7, [{
                            id: /* `Advantage */[
                              -41058677,
                              Id$OptolithClient.advantageToInt(/* Aptitude */0)
                            ],
                            active: false,
                            sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                            sid2: undefined,
                            level: undefined
                          }]),
                      /* :: */[
                        /* Activatable */Block.__(7, [{
                              id: /* `Advantage */[
                                -41058677,
                                Id$OptolithClient.advantageToInt(/* ExceptionalSkill */4)
                              ],
                              active: false,
                              sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                              sid2: undefined,
                              level: undefined
                            }]),
                        /* [] */0
                      ]
                    ];
            }
          } else {
            return /* :: */[
                    /* Activatable */Block.__(7, [{
                          id: /* `Advantage */[
                            -41058677,
                            Id$OptolithClient.advantageToInt(/* MagicalAttunement */13)
                          ],
                          active: false,
                          sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                          sid2: undefined,
                          level: undefined
                        }]),
                    /* [] */0
                  ];
          }
        } else {
          return /* [] */0;
        }
    case /* SpecialAbility */2 :
        var match$2 = Id$OptolithClient.specialAbilityFromInt(staticEntry[0].id);
        if (typeof match$2 !== "number") {
          return /* [] */0;
        }
        if (match$2 >= 71) {
          if (match$2 !== 76) {
            if (match$2 >= 72) {
              return /* [] */0;
            } else {
              return /* :: */[
                      /* Activatable */Block.__(7, [{
                            id: /* `SpecialAbility */[
                              -789492591,
                              Id$OptolithClient.specialAbilityToInt(/* Language */6)
                            ],
                            active: true,
                            sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                            sid2: undefined,
                            level: 3
                          }]),
                      /* [] */0
                    ];
            }
          } else {
            return Ley_Option$OptolithClient.option(/* [] */0, (function (ids) {
                          return /* :: */[
                                  /* ActivatableMultiEntry */Block.__(8, [{
                                        id: ids,
                                        active: true,
                                        sid: undefined,
                                        sid2: undefined,
                                        level: undefined
                                      }]),
                                  /* [] */0
                                ];
                        }), Ley_Option$OptolithClient.ensure(Ley_List$OptolithClient.Extra.notNull, Curry._3(Ley_IntMap$OptolithClient.Foldable.foldr, (function (x) {
                                  if (!x.canLearnRituals) {
                                    return Ley_Function$OptolithClient.id;
                                  }
                                  var partial_arg_001 = x.id;
                                  var partial_arg = /* `SpecialAbility */[
                                    -789492591,
                                    partial_arg_001
                                  ];
                                  return (function (param) {
                                      return Ley_List$OptolithClient.cons(partial_arg, param);
                                    });
                                }), /* [] */0, staticData.magicalTraditions)));
          }
        }
        if (match$2 !== 46) {
          if (match$2 >= 26) {
            return /* [] */0;
          }
          switch (match$2) {
            case /* SkillSpecialization */0 :
                var sameSkillActiveCount = Ley_Option$OptolithClient.option(0, (function (heroEntry) {
                        return Ley_List$OptolithClient.countBy((function (x) {
                                      return Caml_obj.caml_equal(Ley_Option$OptolithClient.listToOption(x.options), sid);
                                    }), heroEntry.active);
                      }), heroEntry);
                var sameSkillDependency = sid !== undefined && !(typeof sid === "number" || sid[0] !== 290194801) ? /* Increasable */Block.__(10, [{
                        id: sid,
                        value: Caml_int32.imul(sameSkillActiveCount + (
                              isEntryToAdd ? 1 : 0
                            ) | 0, 6)
                      }]) : undefined;
                return Ley_List$OptolithClient.append(Ley_Option$OptolithClient.optionToList(sameSkillDependency), Ley_Option$OptolithClient.optionToList(Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(sid, (function (param) {
                                          return Activatable$OptolithClient.SelectOptions.getSelectOption(staticEntry, param);
                                        })), (function (option) {
                                      var match = option.wikiEntry;
                                      var tmp;
                                      tmp = match !== undefined && match.tag === /* Skill */4 ? Caml_option.some(match[0].applications) : undefined;
                                      return Ley_Option$OptolithClient.Monad.$great$great$eq(tmp, (function (appMp) {
                                                    var tmp;
                                                    if (sid2 !== undefined && !(typeof sid2 === "number" || sid2[0] !== 61643255)) {
                                                      var id = sid2[1];
                                                      tmp = Curry._2(Ley_IntMap$OptolithClient.Foldable.find, (function (app) {
                                                              return app.id === id;
                                                            }), appMp);
                                                    } else {
                                                      tmp = undefined;
                                                    }
                                                    return Ley_Option$OptolithClient.Monad.$great$great$eq(tmp, (function (app) {
                                                                  return Ley_Option$OptolithClient.Functor.$less$amp$great(app.prerequisite, (function (prerequisite) {
                                                                                return /* Activatable */Block.__(7, [prerequisite]);
                                                                              }));
                                                                }));
                                                  }));
                                    }))));
            case /* PropertyFocus */11 :
                return /* :: */[
                        /* Activatable */Block.__(7, [{
                              id: /* `SpecialAbility */[
                                -789492591,
                                Id$OptolithClient.specialAbilityToInt(/* PropertyKnowledge */10)
                              ],
                              active: true,
                              sid: Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId),
                              sid2: undefined,
                              level: undefined
                            }]),
                        /* [] */0
                      ];
            case /* AdaptionZauber */16 :
                if (sid !== undefined && !(typeof sid === "number" || sid[0] !== 345443720)) {
                  return /* :: */[
                          /* Increasable */Block.__(10, [{
                                id: sid,
                                value: 10
                              }]),
                          /* [] */0
                        ];
                } else {
                  return /* [] */0;
                }
            case /* FavoriteSpellwork */18 :
                if (sid !== undefined && !(typeof sid === "number" || sid[0] !== 345443720)) {
                  return /* :: */[
                          /* Increasable */Block.__(10, [{
                                id: sid,
                                value: 0
                              }]),
                          /* [] */0
                        ];
                } else {
                  return /* [] */0;
                }
            case /* TerrainKnowledge */1 :
            case /* CraftInstruments */2 :
            case /* Hunter */3 :
            case /* AreaKnowledge */4 :
            case /* Literacy */5 :
            case /* Language */6 :
            case /* CombatReflexes */7 :
            case /* ImprovedDodge */8 :
            case /* TraditionGuildMages */9 :
            case /* PropertyKnowledge */10 :
            case /* AspectKnowledge */12 :
            case /* TraditionChurchOfPraios */13 :
            case /* Feuerschlucker */14 :
            case /* CombatStyleCombination */15 :
            case /* Exorzist */17 :
            case /* TraditionWitches */19 :
            case /* MagicStyleCombination */20 :
            case /* Harmoniezauberei */21 :
            case /* Matrixzauberei */22 :
            case /* TraditionElves */23 :
            case /* TraditionDruids */24 :
                return /* [] */0;
            case /* SpellEnhancement */25 :
                break;
            
          }
        }
        return Ley_Option$OptolithClient.fromOption(/* [] */0, Ley_Option$OptolithClient.Monad.$great$great$eq(Ley_Option$OptolithClient.Monad.$great$great$eq(sid, (function (param) {
                              return Activatable$OptolithClient.SelectOptions.getSelectOption(staticEntry, param);
                            })), (function (option) {
                          return Ley_Option$OptolithClient.Monad.liftM2((function (target, level) {
                                        return /* :: */[
                                                /* Increasable */Block.__(10, [{
                                                      id: match$2 === /* SpellEnhancement */25 ? /* `Spell */[
                                                          345443720,
                                                          target
                                                        ] : /* `LiturgicalChant */[
                                                          -384382742,
                                                          target
                                                        ],
                                                      value: (level << 2) + 4 | 0
                                                    }]),
                                                /* [] */0
                                              ];
                                      }), option.enhancementTarget, option.enhancementLevel);
                        })));
        break;
    
  }
}

function getSelectOptionPrerequisites(sid, staticEntry) {
  var tmp;
  switch (staticEntry.tag | 0) {
    case /* Advantage */0 :
    case /* Disadvantage */1 :
        tmp = staticEntry[0].selectOptions;
        break;
    case /* SpecialAbility */2 :
        tmp = staticEntry[0].selectOptions;
        break;
    
  }
  return Ley_Option$OptolithClient.option(/* [] */0, (function (option) {
                return flattenPrerequisiteLevel(option.prerequisites, /* [] */0);
              }), Curry._2(Static_SelectOption$OptolithClient.SelectOptionMap.lookup, sid, tmp));
}

function getDynamicPrerequisites(isEntryToAdd, staticData, staticEntry, heroEntry, singleEntry) {
  var sid = Activatable$OptolithClient.getOption1(singleEntry);
  var entrySpecifics = getEntrySpecificDynamicPrerequisites(isEntryToAdd, staticData, staticEntry, heroEntry, singleEntry);
  var selectOptionSpecifics = Ley_Option$OptolithClient.option(/* [] */0, (function (sid) {
          return getSelectOptionPrerequisites(sid, staticEntry);
        }), Ley_Option$OptolithClient.Monad.$great$great$eq(sid, Activatable$OptolithClient.Convert.activatableOptionToSelectOptionId));
  return Pervasives.$at(selectOptionSpecifics, entrySpecifics);
}

var Dynamic = {
  getEntrySpecificDynamicPrerequisites: getEntrySpecificDynamicPrerequisites,
  getSelectOptionPrerequisites: getSelectOptionPrerequisites,
  getDynamicPrerequisites: getDynamicPrerequisites
};

export {
  Flatten ,
  Dynamic ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
