/*
Description:
Given an array/list [] of n integers,
find maximum triplet sum in the array Without duplications.
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives, negatives and zeros .
Repetition of numbers in the array/list could occur,
So (duplications are not included when summing).
An example:
maxTriSum ({3,2,6,8,2,3}) ==> return (17)
maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
*/


//мое решение - сортировка, удаление дубликатов, сумма первых трех элементов нового массива
function maxTriSum(numbers) {
	let sortedNumbers = numbers.sort((a, b) => b - a)
	for (let i = 0; i < sortedNumbers.length; i++) {
		if (sortedNumbers[i] === sortedNumbers[i + 1]) {
			sortedNumbers.splice(i, 1)
		}
	}
	return sortedNumbers[0] + sortedNumbers[1] + sortedNumbers[2]
}

//можно было избавиться от дубликатов через Set
//деструктуризацией выделить первые три элемента массива
// const maxTriSum = numbers => {
//   const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
//   return a+b+c
// }

maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])