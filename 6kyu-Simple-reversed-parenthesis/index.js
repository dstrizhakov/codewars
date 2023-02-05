
/**
Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.
For example:
solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
Parenthesis will be either "(" or ")".
More examples in the test cases.
Good luck.
 */

//My solution:
function solve(s) {
	let count = 0;
	// если нечетное колво скобок значит решений нет
	if (s.length % 2 !== 0) return -1;
	let uncorrect = s;
	// избавляемся от () чтобы получить строку невалидных скобок
	while (uncorrect.includes('()')) {
		uncorrect = uncorrect.replace("()", '');
	}
	// Если после этого получили пустую строку значит все скобки были валидные
	if (uncorrect.length === 0) {
		return 0
	} else {
		// иначе идем сначала строки и если у нас разные скобки )( по прибывляем по 2
		while (uncorrect.length) {
			if (uncorrect[0] !== uncorrect[1]) {
				count += 2;
				uncorrect = uncorrect.substring(2);
			} else {
				count += 1;
				uncorrect = uncorrect.substring(2);
			}
		}
	}
	return count;
}

