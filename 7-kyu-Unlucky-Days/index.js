// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// мое решение
function unluckyDays(year) {
  let date = new Date(year, 0, 2);
  let unlucky = 0;

  while (date.getFullYear() !== year + 1) {
    if (date.getDate() === 13 && date.getDay() === 5) {
      unlucky++;
    }
    date.setDate(date.getDate() + 1);
  }
  return unlucky;
}

// самое умное решение:

// function unluckyDays(year){
//   let unlucky = 0;
//   for (var i = 0; i < 12; i++) {
//     if(new Date(year, i, 13).getDay() === 5){
//       unlucky++;
//     }
//   }
//   return unlucky;
// }
