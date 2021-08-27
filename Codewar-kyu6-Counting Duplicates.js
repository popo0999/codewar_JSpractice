// Counting Duplicates

/* 

Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

// My solution:
function duplicateCount(text) {
	let x = text.toLowerCase().split("").sort();
	let count = 0;
	for (let i = 0; i < x.length; i++) {
		for (let j = i + 1; j < x.length; j++) {
			if (x[i] == x[j] && x[i] != x[j - 2]) count++;
		}
	}
	return count;
}

// arrow + forEach
function duplicateCount(text) {
	let count = 0;
	text
		.toLowerCase()
		.split("")
		.sort()
		.forEach((v, k, el) => {
			if (v == el[k + 1] && v != el[k - 1]) count++;
		});
	return count;
}
