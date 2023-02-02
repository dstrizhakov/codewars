/*
Create a function strCount (takes an object as argument) that will count 
all string values inside an object. For example:
strCount({
	first: "1",
	second: "2",
	third: false,
	fourth: ["anytime",2,3,4],
	fifth:  null
	})
	returns 3
 */

function strCount(obj) {
	let count = 0;
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			count++;
		}
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			count += strCount(obj[key]);
		}
	}
	return count;
}


let s1 = {
	first: "1",
	second: "2",
	third: false,
	fourth: ["anytime", 2, 3, 4],
	fifth: null
}

console.log(strCount(s1));
