// Replace With Alphabet Position

/* 

Description:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

*/

// My solution:
function alphabetPosition(text) {
	let num = 1;
	let ar = text
		.toLowerCase()
		.split('')
		.filter((a) => a.match(/[a-z]/));

	for (let i = 97; i < 123; i++) {
		for (let j = 0; j < ar.length; j++) {
			if (ar[j] == String.fromCharCode(i)) {
				ar[j] = i - 96;
			}
		}
	}
	return ar.join(' ');
}
