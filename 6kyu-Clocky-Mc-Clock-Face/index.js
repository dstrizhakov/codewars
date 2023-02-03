/*
Given the angle (in degrees) of the hour-hand, return the time in
12 hour HH:MM format. Round down to the nearest minute.
Examples:
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
Notes:
0 <= angle <= 360
Do not make any AM or PM assumptions for the HH:MM result.
They are indistinguishable for this Kata.
3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07
 */

//Мое решение:
var whatTimeIsIt = function (angle) {
	angle === 0 ? angle += 360 : angle;
	let time = angle / 30;
	let hours = Math.floor(time);
	let minutes = Math.floor((angle % 30) * 2);
	hours === 0 ? hours = 12 : hours;
	let result = hours.toString().length === 1 ? `0${hours}:` : `${hours}:`
	result += minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`
	return result;
}


//Самое умное решение:
// var whatTimeIsIt = function(angle) {
//   let h = ~~(angle/30), m = ~~((angle%30)*2);
//   return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
// }
// оказывается ~~ эквивалент Math.floor( ) в JS