// EXAMPLE 1 - Check if a Variable is equal to Multiple Values in JS

const str = 'hello world';

const val1 = 'hello world';
const val2 = 'hello world';
const val3 = 'hello world';

const result = [val1, val2, val3].every(value => {
  return value === str;
});

console.log(result); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a variable is equal to all of multiple values using && operator

// const str = 'hello world';

// const val1 = 'hello world';
// const val2 = 'hello world';
// const val3 = 'hello world';

// if (str === val1 && str === val2 && str === val3) {
//   // 👇️ this runs
//   console.log('✅ variable is equal to all of the values');
// } else {
//   console.log('⛔️ variable is not equal to all of the values');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Variable is equal to One of Multiple Values in JS

// const str = 'hello world';

// const val1 = 'hello world';
// const val2 = 'bye world';
// const val3 = 'test world';

// if ([val1, val2, val3].includes(str)) {
//   console.log(
//     '✅ variable is equal to at least 1 of the values',
//   );
// } else {
//   console.log('⛔️ variable is not equal to any of the values');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if three values are equal using a `Set` object

// const set1 = new Set(['a', 'a', 'a']);
// console.log(set1); // 👉️ {'a'}

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if a Variable is equal to One of Multiple Values using `indexOf`

// const str = 'hello world';

// const val1 = 'hello world';
// const val2 = 'bye world';
// const val3 = 'test world';

// if ([val1, val2, val3].indexOf(str) !== -1) {
//   // 👇️ this runs
//   console.log(
//     '✅ variable is equal to at least 1 of the values',
//   );
// } else {
//   console.log('⛔️ variable is not equal to any of the values');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if Variable Doesn't Equal Multiple Values in JavaScript

// const a = 'one';
// const b = 'two';
// const c = 'three';

// if (a !== b && a !== c) {
//   // 👇️ this runs
//   console.log('✅ a is not equal to b and c');
// } else {
//   console.log('⛔️ a is equal to b or c, or both');
// }

// // ✅ Check if variable is not equal to multiple values (every())
// const notEqual = [b, c].every(value => value !== a);
// console.log(notEqual); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if Variable Doesn't Equal Multiple Values using `includes()`

// const a = 'one';
// const b = 'two';
// const c = 'three';

// const notEqual = ![b, c].includes(a);
// console.log(notEqual); // 👉️ true

// if (a !== b && a !== c) {
//   // 👇️ this runs
//   console.log('a is not equal to b and c');
// } else {
//   console.log('a is equal to b or c, or both');
// }

// ------------------------------------------------------------------

// // EXAMPLE 8 - Check if Variable Doesn't Equal Multiple Values using `every()`

// const a = 'one';
// const b = 'two';
// const c = 'three';

// const notEqual = [b, c].every(value => value !== a);
// console.log(notEqual); // 👉️ true

// if (a !== b && a !== c) {
//   // 👇️ this runs
//   console.log('a is not equal to b and c');
// } else {
//   console.log('a is equal to b or c, or both');
// }
