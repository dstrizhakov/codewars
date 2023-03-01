/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

//Мое решение:
function deepCount(array) {
  return array.reduce(
    (summ, el) => summ + (Array.isArray(el) ? deepCount(el) : 0),
    array.length
  );
}

// Если внутри могут быть объекты то:
// function deepCount(array) {
//   return array.reduce(
//     (summ, el) => summ + (typeof el == "object" ? deepCount(el) + 1 : 1),
//     0
//   );
// }

// через forEach:
// const deepCount = (array) => {
//   let counter = array.length;
//   array.forEach(item => {
//     counter += Array.isArray(item) ? deepCount(item) : 0;
//   });
//   return counter;
// }
