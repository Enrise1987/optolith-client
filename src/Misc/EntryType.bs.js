// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


function toInt(x) {
  return x + 1 | 0;
}

var All = {
  toInt: toInt
};

function toAll(x) {
  switch (x) {
    case /* Advantage */0 :
        return /* Advantage */5;
    case /* Disadvantage */1 :
        return /* Disadvantage */6;
    case /* SpecialAbility */2 :
        return /* SpecialAbility */22;
    
  }
}

function toInt$1(x) {
  return x + 1 | 0;
}

var SelectOption = {
  toInt: toInt$1
};

var Activatable = {
  toAll: toAll,
  SelectOption: SelectOption
};

var ActivatableAndSkill = {};

var ActivatableSkill = {};

var PermanentSkill = {};

var Increasable = {};

var PrerequisiteSource = {};

export {
  All ,
  Activatable ,
  ActivatableAndSkill ,
  ActivatableSkill ,
  PermanentSkill ,
  Increasable ,
  PrerequisiteSource ,
  
}
/* No side effect */
