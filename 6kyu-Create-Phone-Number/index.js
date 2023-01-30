/*
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */


//Мое решение:
function createPhoneNumber(numbers) {
	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}


// понравилось решение:
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
//   return format;
// }