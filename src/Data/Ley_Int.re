/**
 * Returns the larger of its two arguments.
 */
let max = (x: int, y: int) => x > y ? x : y;

let min = (x: int, y: int) => x < y ? x : y;

let minmax = (x: int, y: int) => x < y ? (x, y) : (y, x);

let inc = (x: int) => x + 1;

let dec = (x: int) => x - 1;

let negate = (x: int) => - x;

let abs = (x: int) => x < 0 ? - x : x;

let show = Js.Int.toString;

let read = int_of_string;

let readOption = int_of_string_opt;
