// Your order, please

/* 

Description:

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""


*/

// My solution:
function order(words) {
	let ar = words.split(' ');
	let newAr = [];
	console.log(ar);
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 1) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 2) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 3) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 4) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 5) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 6) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 7) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 8) {
				newAr.push(ar[i]);
			}
	}
	for (let i = 0; i < ar.length; i++) {
		for (let j = 0; j <= ar[i].length; j++)
			if (ar[i][j] == 9) {
				newAr.push(ar[i]);
			}
	}
	return newAr.join(' ');
}
