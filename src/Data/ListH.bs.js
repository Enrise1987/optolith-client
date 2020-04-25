// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_int = require("bs-platform/lib/js/js_int.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Maybe$OptolithClient = require("./Maybe.bs.js");
var Function$OptolithClient = require("./Function.bs.js");

function $less$$great(f, xs) {
  if (xs) {
    return /* :: */[
            Curry._1(f, xs[0]),
            $less$$great(f, xs[1])
          ];
  } else {
    return /* [] */0;
  }
}

function $less$amp$great(xs, f) {
  return $less$$great(f, xs);
}

var Functor = {
  $less$$great: $less$$great,
  $less$amp$great: $less$amp$great
};

function $less$star$great(fs, xs) {
  if (fs && xs) {
    var x = xs[0];
    return Pervasives.$at($less$$great((function (f) {
                      return Curry._1(f, x);
                    }), fs), $less$star$great(fs, xs[1]));
  } else {
    return /* [] */0;
  }
}

var Applicative = {
  $less$star$great: $less$star$great
};

function $less$pipe$great(xs, ys) {
  if (xs) {
    return xs;
  } else {
    return ys;
  }
}

function guard(pred) {
  if (pred) {
    return /* :: */[
            /* () */0,
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

var Alternative = {
  $less$pipe$great: $less$pipe$great,
  guard: guard
};

function $great$great$eq(xs, f) {
  if (xs) {
    return Pervasives.$at(Curry._1(f, xs[0]), $great$great$eq(xs[1], f));
  } else {
    return /* [] */0;
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

function foldr(f, initial, xs) {
  if (xs) {
    return Curry._2(f, xs[0], foldr(f, initial, xs[1]));
  } else {
    return initial;
  }
}

function foldr1(f, xs) {
  if (xs) {
    return foldr(f, xs[0], xs[1]);
  } else {
    return Pervasives.invalid_arg("Cannot apply foldr1 to an empty list.");
  }
}

function foldl(f, _initial, _xs) {
  while(true) {
    var xs = _xs;
    var initial = _initial;
    if (xs) {
      _xs = xs[1];
      _initial = Curry._2(f, initial, xs[0]);
      continue ;
    } else {
      return initial;
    }
  };
}

function foldl1(f, xs) {
  if (xs) {
    return foldl(f, xs[0], xs[1]);
  } else {
    return Pervasives.invalid_arg("Cannot apply foldl1 to an empty list.");
  }
}

function toList(xs) {
  return xs;
}

function $$null(xs) {
  if (xs) {
    return false;
  } else {
    return true;
  }
}

var length = List.length;

function elem(e, xs) {
  return List.exists((function (x) {
                return Caml_obj.caml_equal(e, x);
              }), xs);
}

function sum(xs) {
  return foldr((function (prim, prim$1) {
                return prim + prim$1 | 0;
              }), 0, xs);
}

function product(xs) {
  return foldr(Caml_int32.imul, 1, xs);
}

function maximum(xs) {
  return foldr((function (prim, prim$1) {
                return Math.max(prim, prim$1);
              }), Js_int.min, xs);
}

function minimum(xs) {
  return foldr((function (prim, prim$1) {
                return Math.min(prim, prim$1);
              }), Js_int.max, xs);
}

function concat(xss) {
  return $great$great$eq(xss, Function$OptolithClient.id);
}

function concatMap(f, xs) {
  return $great$great$eq(xs, f);
}

function con(_xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (xs[0]) {
        _xs = xs[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
}

function dis(_xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (xs[0]) {
        return true;
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function any(f, _xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (Curry._1(f, xs[0])) {
        return true;
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function all(f, _xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (Curry._1(f, xs[0])) {
        _xs = xs[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
}

function notElem(e, xs) {
  return !elem(e, xs);
}

function find(f, _xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var y = xs[0];
      if (Curry._1(f, y)) {
        return /* Just */[y];
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return /* Nothing */0;
    }
  };
}

var Foldable = {
  foldr: foldr,
  foldr1: foldr1,
  foldl: foldl,
  foldl1: foldl1,
  toList: toList,
  $$null: $$null,
  length: length,
  elem: elem,
  sum: sum,
  product: product,
  maximum: maximum,
  minimum: minimum,
  concat: concat,
  concatMap: concatMap,
  con: con,
  dis: dis,
  any: any,
  all: all,
  notElem: notElem,
  find: find
};

function $less$plus$great(x, xs) {
  return /* :: */[
          x,
          xs
        ];
}

function lookup(k, xs) {
  return Maybe$OptolithClient.Functor.$less$amp$great(find((function (param) {
                    return Caml_obj.caml_equal(k, param[0]);
                  }), xs), (function (prim) {
                return prim[1];
              }));
}

var map = $less$$great;

exports.Functor = Functor;
exports.Applicative = Applicative;
exports.Alternative = Alternative;
exports.Monad = Monad;
exports.Foldable = Foldable;
exports.$less$plus$great = $less$plus$great;
exports.map = map;
exports.elem = elem;
exports.notElem = notElem;
exports.lookup = lookup;
/* No side effect */
