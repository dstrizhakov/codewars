/*
Description:
I am the father of three wonderful sons. before the beginning of the school year,
I promised them that I would buy a bicycle for someone who would bring the best
marks at the end of the school year. it's time to keep promises and I count on you.
You have 3 input objects(school diaries) with school subjects and marks (1-10).
For example:
{
	'algebra': 6,
	'history': 8,
	'physics': 9,
	'geography': 2,
	'chemistry': 9
}
Return please :
'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.

If two or three sons have the same highest marks, you need to choose the younger one.
Use the age table which is constant and preloaded:
const ageTable = {
									'firstSonAge': 14,
									'secondSonAge': 9,
									'thirdSonAge': 8
								}
*/

function whoseBicycle(diary1, diary2, diary3) {
	const countAvg = (d) => {
		let count = 0
		for (let key in d) {
			count += d[key];
		}
		return count / Object.keys(d).length
	}
	let avgDiary = {
		first: countAvg(diary1),
		second: countAvg(diary2),
		third: countAvg(diary3),
	}
	if (avgDiary['first'] > avgDiary['second'] && avgDiary['first'] > avgDiary['third']) {
		return 'I need to buy a bicycle for my first son.'
	}
	if (avgDiary['second'] > avgDiary['first'] && avgDiary['second'] > avgDiary['third']) {
		return 'I need to buy a bicycle for my second son.'
	}
	if (avgDiary['third'] > avgDiary['first'] && avgDiary['third'] > avgDiary['second']) {
		return 'I need to buy a bicycle for my third son.'
	}
	if (avgDiary['first'] === avgDiary['second'] && avgDiary['first'] === avgDiary['third']) {
		return 'I need to buy a bicycle for my third son.'
	}
	if (avgDiary['first'] === avgDiary['second'] && avgDiary['first'] !== avgDiary['third']) {
		return 'I need to buy a bicycle for my second son.'
	}
	if (avgDiary['first'] !== avgDiary['second'] && avgDiary['first'] === avgDiary['third']) {
		return 'I need to buy a bicycle for my third son.'
	}
	if (avgDiary['second'] !== avgDiary['first'] && avgDiary['second'] === avgDiary['third']) {
		return 'I need to buy a bicycle for my third son.'
	}
}


// самое умное решение:
// function whoseBicycle(a, b, c) {
//   [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));
//   let n = Math.max(a, b, c);
//   return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
// }