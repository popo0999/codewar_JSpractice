// First non-repeating character

/* 

Description:
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

// My solution:
function firstNonRepeatingLetter(s) {
	let ar = s.toLowerCase().split('');
	let num = 0;
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j < ar.length; j++) {
			if (ar[i] === ar[j]) {
				num++;
			}
			if (num > 1) break;
		}
		if (num === 1) {
			return s[i];
		}
		num = 0;
	}
	return '';
}

let a1 = firstNonRepeatingLetter('a'); // 'a');

let a2 = firstNonRepeatingLetter('stress'); // 't');

let a3 = firstNonRepeatingLetter('moonmen'); // 'e');

let a4 = firstNonRepeatingLetter(''); // '');

let a5 = firstNonRepeatingLetter('aa'); // '');
// let a6 = primeFactors(18195729); //"(3)(17**2)(31)(677)"

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
// console.log(a6);
