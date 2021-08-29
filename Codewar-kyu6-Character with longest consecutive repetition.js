// Character with longest consecutive repetition

/* 

Description:
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]

*/

// My solution:
function longestRepetition(s) {
	if (s == '') {
		return [s, 0];
	}
	let c = s[0];
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let cur = 1;
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] != s[j]) {
				break;
			} else {
				cur++;
			}
		}
		if (cur > count) {
			count = cur;
			c = s[i];
		}
	}
	return [c, count];
}
