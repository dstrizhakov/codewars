/*
Description:
Write a function that takes a string and outputs a strings of 1's and 0's where vowels 
become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.

An example:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/

function vowelOne(s) {
	let sLower = s.toLowerCase();
	let result = '';
	for (let i = 0; i < sLower.length; i++) {
		'aeiou'.includes(sLower[i]) ? result += '1' : result += '0'
	}
	return result
}

//самое умное решение:
// function vowelOne(s){
//   return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
// }