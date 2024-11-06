/*
Description:
Given an array of integers ,Find the minimum sum which is obtained
from summing each Two integers product.
Notes:
Array/list will contain positives only .
Array/list will always have even size

An example:
minSum({5,4,2,3}) ==> return (22) 
The minimum sum obtained from summing each two integers product,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
The minimum sum obtained from summing each two integers product,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
The minimum sum obtained from summing each two integers product,  9*0 + 8*2 +7*4 +6*5 = 74
*/

function minSum(arr) {
	let result = 0
	let sortedArr = arr.sort((a, b) => a - b)
	for (let i = 0; i <= (sortedArr.length - 1) / 2; i++) {
		result = result + Number(sortedArr[i]) * Number(sortedArr[sortedArr.length - 1 - i])
	}
	return result;
}

//самое умное решение:
// const minSum = arr =>
//   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
