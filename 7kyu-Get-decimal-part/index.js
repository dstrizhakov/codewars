/*
Description:
Write a function that returns only the decimal part of the given number.
You only have to handle valid numbers, not Infinity, NaN, or similar.
Always return a positive decimal part.
An example:
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/


function getDecimal(n) {
	return Math.abs(((n * 10) % 10) / 10);
}

// оказывается можно было так...)
// function getDecimal(n){
//   return Math.abs(n%1);
// }