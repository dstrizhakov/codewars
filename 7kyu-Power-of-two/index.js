/*
Description:
Complete the function power_of_two/powerOfTwo (or equivalent, 
depending on your language) that determines if a given non-negative 
integer is a power of two. From the corresponding Wikipedia entry:
"a power of two is a number of the form 2n where n is an integer,
i.e. the result of exponentiation with number two as the base and 
integer n as the exponent"
You may assume the input is always valid.
Note: 
Beware of certain edge cases - for example,
1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
An example:
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
*/

//можно решить рекурсивно
// просто делить на 2 пока не получим 2 или меньше
// если получили 2 то вернем true;
// если получаем число меньше 2 - false

function isPowerOfTwo(n) {
	if (n === 2 || n === 1) return true;
	if (n < 2) return false;
	return isPowerOfTwo(n / 2);
}
