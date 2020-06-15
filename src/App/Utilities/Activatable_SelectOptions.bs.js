// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Ley_List$OptolithClient from "../../Data/Ley_List.bs.js";
import * as Ley_IntMap$OptolithClient from "../../Data/Ley_IntMap.bs.js";
import * as Ley_Option$OptolithClient from "../../Data/Ley_Option.bs.js";
import * as Ley_Function$OptolithClient from "../../Data/Ley_Function.bs.js";
import * as Activatable_Convert$OptolithClient from "./Activatable_Convert.bs.js";
import * as Static_SelectOption$OptolithClient from "../Models/Static_SelectOption.bs.js";
import * as Activatable_Accessors$OptolithClient from "./Activatable_Accessors.bs.js";

function getSelectOption(x, id) {
  var partial_arg = Activatable_Accessors$OptolithClient.selectOptions(x);
  return Ley_Option$OptolithClient.Monad.$great$great$eq(Activatable_Convert$OptolithClient.activatableOptionToSelectOptionId(id), (function (param) {
                return Ley_Function$OptolithClient.flip(Static_SelectOption$OptolithClient.SelectOptionMap.lookup, partial_arg, param);
              }));
}

function getSelectOptionName(x, id) {
  return Ley_Option$OptolithClient.Functor.$less$amp$great(getSelectOption(x, id), (function (y) {
                return y.name;
              }));
}

function getSelectOptionCost(x, id) {
  return Ley_Option$OptolithClient.Monad.$great$great$eq(getSelectOption(x, id), (function (y) {
                return y.cost;
              }));
}

function getActiveOptions1(x) {
  return Ley_Option$OptolithClient.mapOption((function (y) {
                return Ley_Option$OptolithClient.listToOption(y.options);
              }), x.active);
}

function getActiveOptions2(param) {
  var index = 1;
  return Ley_Option$OptolithClient.mapOption((function (y) {
                return Ley_List$OptolithClient.Safe.atMay(y.options, index);
              }), param.active);
}

function getOption(index, heroEntry) {
  return Ley_List$OptolithClient.Safe.atMay(heroEntry.options, index);
}

function getOption1(heroEntry) {
  return Ley_Option$OptolithClient.listToOption(heroEntry.options);
}

function getOption2(param) {
  return getOption(1, param);
}

function getOption3(param) {
  return getOption(2, param);
}

function getCustomInput(option) {
  if (option[0] >= 931971705) {
    return option[1];
  }
  
}

function getGenericId(option) {
  if (option[0] !== 61643255) {
    return ;
  } else {
    return option[1];
  }
}

function lookupMap(k, mp, f) {
  return Ley_Option$OptolithClient.Functor.$less$$great(f, Curry._2(Ley_IntMap$OptolithClient.lookup, k, mp));
}

function getSkillFromOption(staticData, option) {
  if (option[0] !== 290194801) {
    return ;
  } else {
    return Curry._2(Ley_IntMap$OptolithClient.lookup, option[1], staticData.skills);
  }
}

export {
  getSelectOption ,
  getSelectOptionName ,
  getSelectOptionCost ,
  getActiveOptions1 ,
  getActiveOptions2 ,
  getOption ,
  getOption1 ,
  getOption2 ,
  getOption3 ,
  getCustomInput ,
  getGenericId ,
  lookupMap ,
  getSkillFromOption ,
  
}
/* Ley_IntMap-OptolithClient Not a pure module */
