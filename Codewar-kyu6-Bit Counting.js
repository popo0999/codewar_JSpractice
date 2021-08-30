// Bit Counting

/* 

Description:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


*/

// My solution:
function countBits(n) {
	let ar = n.toString(2).split('');
	let count = 0;
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] == 1) {
			count++;
		}
	}
	return count;
}

// simplified solution
function countBits(n) {
	let count = 0;
	n.toString(2).split('').forEach(function (v) {
		if (v == 1) count++;
	});
	return count;
}