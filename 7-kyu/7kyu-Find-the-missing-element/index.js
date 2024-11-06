/*
Description:
Given two integer arrays where the second array is a shuffled duplicate
	of the first array with one element missing,find the missing element.
Please note, there may be duplicates in the arrays, so checking if a 
numerical value exists in one and not the other is not a valid solution.
An example:
find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
*/

// можно сложить все элементы первого и ворого массива и затем вычесть одно из другого
// function findMissing(arr1, arr2) {
//   return arr1.reduce((acc, cur) => acc + cur, 0) - arr2.reduce((acc, cur) => acc + cur, 0);
// }

// можно решить в лоб, пробегая по массивам и удаляя из копии arr1 встречающиеся элементы
function findMissing(arr1, arr2) {
	let result = arr1;
	arr2.forEach(el => {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] === el) result.splice(i, 1)
		}
	})
	return result[0] ? result[0] : 0
}
