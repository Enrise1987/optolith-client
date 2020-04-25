// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Function$OptolithClient = require("./Function.bs.js");

function $less$$great(f, mx) {
  if (mx) {
    return /* Just */[Curry._1(f, mx[0])];
  } else {
    return /* Nothing */0;
  }
}

function $less$amp$great(xs, f) {
  return $less$$great(f, xs);
}

var Functor = {
  $less$$great: $less$$great,
  $less$amp$great: $less$amp$great
};

function $less$star$great(mf, mx) {
  if (mf) {
    return $less$$great(mf[0], mx);
  } else {
    return /* Nothing */0;
  }
}

var Applicative = {
  $less$star$great: $less$star$great
};

function $less$pipe$great(mx, my) {
  if (mx) {
    return mx;
  } else {
    return my;
  }
}

function guard(pred) {
  if (pred) {
    return /* Just */[/* () */0];
  } else {
    return /* Nothing */0;
  }
}

var Alternative = {
  $less$pipe$great: $less$pipe$great,
  guard: guard
};

function $great$great$eq(mx, f) {
  if (mx) {
    return Curry._1(f, mx[0]);
  } else {
    return /* Nothing */0;
  }
}

function $eq$less$less(f, mx) {
  return $great$great$eq(mx, f);
}

function $great$great(x, y) {
  return $great$great$eq(x, (function (param) {
                return Function$OptolithClient.$$const(y, param);
              }));
}

function $great$eq$great(f, g, x) {
  return $great$great$eq(Curry._1(f, x), g);
}

function join(x) {
  return $great$great$eq(x, Function$OptolithClient.id);
}

function liftM2(f, mx, my) {
  return $great$great$eq(mx, (function (x) {
                return $less$$great(Curry._1(f, x), my);
              }));
}

function liftM3(f, mx, my, mz) {
  return $great$great$eq(mx, (function (x) {
                return $great$great$eq(my, (function (y) {
                              return $less$$great(Curry._2(f, x, y), mz);
                            }));
              }));
}

function liftM4(f, mx, my, mz, ma) {
  return $great$great$eq(mx, (function (x) {
                return $great$great$eq(my, (function (y) {
                              return $great$great$eq(mz, (function (z) {
                                            return $less$$great(Curry._3(f, x, y, z), ma);
                                          }));
                            }));
              }));
}

var Monad = {
  $great$great$eq: $great$great$eq,
  $eq$less$less: $eq$less$less,
  $great$great: $great$great,
  $great$eq$great: $great$eq$great,
  join: join,
  liftM2: liftM2,
  liftM3: liftM3,
  liftM4: liftM4
};

function foldr(f, init, mx) {
  if (mx) {
    return Curry._2(f, mx[0], init);
  } else {
    return init;
  }
}

function foldl(f, init, mx) {
  if (mx) {
    return Curry._2(f, init, mx[0]);
  } else {
    return init;
  }
}

function toList(mx) {
  if (mx) {
    return /* :: */[
            mx[0],
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function length(mx) {
  if (mx) {
    return 1;
  } else {
    return 0;
  }
}

function elem(e, mx) {
  if (mx) {
    return e === mx[0];
  } else {
    return false;
  }
}

function sum(mx) {
  if (mx) {
    return mx[0];
  } else {
    return 0;
  }
}

function product(mx) {
  if (mx) {
    return mx[0];
  } else {
    return 1;
  }
}

function concat(mxs) {
  if (mxs) {
    return mxs[0];
  } else {
    return /* [] */0;
  }
}

function concatMap(f, mx) {
  if (mx) {
    return Curry._1(f, mx[0]);
  } else {
    return /* [] */0;
  }
}

function con(mx) {
  if (mx) {
    return mx[0];
  } else {
    return true;
  }
}

function dis(mx) {
  if (mx) {
    return mx[0];
  } else {
    return false;
  }
}

function any(pred, mx) {
  if (mx) {
    return Curry._1(pred, mx[0]);
  } else {
    return false;
  }
}

function all(pred, mx) {
  if (mx) {
    return Curry._1(pred, mx[0]);
  } else {
    return true;
  }
}

function notElem(e, mx) {
  return !elem(e, mx);
}

function find(pred, mx) {
  if (mx) {
    var x = mx[0];
    if (Curry._1(pred, x)) {
      return /* Just */[x];
    } else {
      return /* Nothing */0;
    }
  } else {
    return /* Nothing */0;
  }
}

var Foldable = {
  foldr: foldr,
  foldl: foldl,
  toList: toList,
  length: length,
  elem: elem,
  sum: sum,
  product: product,
  concat: concat,
  concatMap: concatMap,
  con: con,
  dis: dis,
  any: any,
  all: all,
  notElem: notElem,
  find: find
};

function sappend(mxs, mys) {
  if (mxs && mys) {
    return /* Just */[List.append(mxs[0], mys[0])];
  } else {
    return /* Nothing */0;
  }
}

var Semigroup = {
  sappend: sappend
};

function isJust(m) {
  if (m) {
    return true;
  } else {
    return false;
  }
}

function isNothing(m) {
  if (m) {
    return false;
  } else {
    return true;
  }
}

function fromMaybe(def, mx) {
  if (mx) {
    return mx[0];
  } else {
    return def;
  }
}

function maybe(def, f, mx) {
  if (mx) {
    return Curry._1(f, mx[0]);
  } else {
    return def;
  }
}

function listToMaybe(xs) {
  if (xs) {
    return /* Just */[xs[0]];
  } else {
    return /* Nothing */0;
  }
}

function catMaybes(xs) {
  return List.fold_right((function (param) {
                return maybe(Function$OptolithClient.id, (function (x, xs) {
                              return /* :: */[
                                      x,
                                      xs
                                    ];
                            }), param);
              }), xs, /* [] */0);
}

function mapMaybe(f, xs) {
  return List.fold_right((function (param) {
                return Function$OptolithClient.$less$neg((function (param) {
                              return maybe(Function$OptolithClient.id, (function (x, xs) {
                                            return /* :: */[
                                                    x,
                                                    xs
                                                  ];
                                          }), param);
                            }), f, param);
              }), xs, /* [] */0);
}

function maybeToOption(mx) {
  if (mx) {
    return Caml_option.some(mx[0]);
  }
  
}

function optionToMaybe(mx) {
  if (mx !== undefined) {
    return /* Just */[Caml_option.valFromOption(mx)];
  } else {
    return /* Nothing */0;
  }
}

var maybeToList = toList;

exports.Functor = Functor;
exports.Applicative = Applicative;
exports.Alternative = Alternative;
exports.Monad = Monad;
exports.Foldable = Foldable;
exports.Semigroup = Semigroup;
exports.isJust = isJust;
exports.isNothing = isNothing;
exports.fromMaybe = fromMaybe;
exports.maybe = maybe;
exports.listToMaybe = listToMaybe;
exports.maybeToList = maybeToList;
exports.catMaybes = catMaybes;
exports.mapMaybe = mapMaybe;
exports.maybeToOption = maybeToOption;
exports.optionToMaybe = optionToMaybe;
/* No side effect */
