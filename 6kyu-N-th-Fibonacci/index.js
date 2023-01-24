/*
Description:
I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that, when given a number n (n >= 1 ), 
returns the nth number in the Fibonacci Sequence.
For example:
nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, 
and each subsequent number is the sum of the previous two.
*/

//мое решение согласно формуле Бине
function nthFibo(n) {
	let fibo = ((((1 + Math.sqrt(5)) / 2) ** (n - 1)) - (((1 - Math.sqrt(5)) / 2) ** (n - 1))) / Math.sqrt(5)
	return Math.trunc(fibo)
}

// Самое умное решение:
// function nthFibo(n) {
// 	let [prev, curr] = [0, 1];
// 	for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
// 	return prev;
// }
// Рекурсивное решение:
// function nthFibo(n) {
//   return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }