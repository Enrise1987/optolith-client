import { flip } from './flip';

/**
 * Adds two numbers. Equivalent to `a + b` but curried.
 */
export const add = (a: number) => (b: number) => a + b;

/**
 * Subtracts two numbers. Equivalent to `a - b` but curried. Subtracts the
 * second argument from the first argument.
 */
export const subtract = (a: number) => (b: number) => a - b;

/**
 * Subtracts two numbers. Equivalent to `a - b` but curried. Subtracts the
 * first argument from the second argument.
 */
export const subtractBy: (b: number) => (a: number) => number = flip (subtract);

/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 */
export const multiply = (a: number) => (b: number) => a * b;

/**
 * Divides one number by another number. Equivalent to `a / b` but curried.
 * Divide the first argument by the second argument.
 */
export const divide = (a: number) => (b: number) => a / b;

/**
 * Divides one number by another number. Equivalent to `a / b` but curried.
 * Divide the second argument by the first argument.
 */
export const divideBy: (b: number) => (a: number) => number = flip (divide);

/**
 * `even :: Integral a => a -> Bool`
 *
 * Checks if a number is even.
 */
export const even = (x: number) => x % 2 === 0;

/**
 * `odd :: Integral a => a -> Bool`
 *
 * Checks if a number is odd.
 */
export const odd = (x: number) => x % 2 !== 0;