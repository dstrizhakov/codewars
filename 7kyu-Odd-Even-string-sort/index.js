/*
Description:
Given a string s. You have to return another string such that even-indexed 
and odd-indexed characters of s are grouped and groups are space-separated 
(see sample below)
Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
An example:
input: 'CodeWars'
output 'CdWr oeas'
*/

function sortMyString(S) {
	let oddString = '';
	let evenString = ''
	for (let i = 0; i < S.length; i += 2) {
		oddString += S[i];
		evenString += (S[i + 1]) ? S[i + 1] : '';
	}
	return oddString + ' ' + evenString;
}