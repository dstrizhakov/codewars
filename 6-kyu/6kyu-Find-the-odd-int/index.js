/*
Description:
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times. 
for example:
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

//Сортируем, замем прибавляем нечетные вычитаем четные элементы массива
// получаем число которое повторяется нечетное количество раз
const findOdd = (A) => result = A
	.sort((a, b) => a - b)
	.reduce((acc, el, index) => index % 2 ? acc -= el : acc += el)


findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);

//самое умное решение:
// const findOdd = (A) => A.reduce((a, b) => a ^ b);