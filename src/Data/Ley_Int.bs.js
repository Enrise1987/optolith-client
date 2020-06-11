// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";

function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function minmax(x, y) {
  if (x < y) {
    return /* tuple */[
            x,
            y
          ];
  } else {
    return /* tuple */[
            y,
            x
          ];
  }
}

function inc(x) {
  return x + 1 | 0;
}

function dec(x) {
  return x - 1 | 0;
}

function negate(x) {
  return -x | 0;
}

function abs(x) {
  if (x < 0) {
    return -x | 0;
  } else {
    return x;
  }
}

function show(prim) {
  return prim.toString();
}

var read = Caml_format.caml_int_of_string;

var readOption = Pervasives.int_of_string_opt;

export {
  max ,
  min ,
  minmax ,
  inc ,
  dec ,
  negate ,
  abs ,
  show ,
  read ,
  readOption ,
  
}
/* No side effect */
