// Duplicate Encoder

/* 

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

// My solution:
function duplicateEncode(word) {
	let ar = word.toLowerCase().split('');
	let newAr = [];
	console.log(word.split('d'));

	for (let i = 0; i < ar.length; i++) {
		let num = word.toLowerCase().split(ar[i]).length - 1;
		console.log(word.split(ar[i]));
		console.log(num);
		if (num > 1) {
			newAr.push(')');
		} else {
			newAr.push('(');
		}
	}
	return newAr.join('');
}
