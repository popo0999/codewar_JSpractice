// Primes in numbers
// Not success

/* 

Description:
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

// My solution:
function primeFactors(n) {
	let ar = [];
	let sqrtMax = Math.ceil(Math.sqrt(n, 2));
	console.log('sqrtMax', sqrtMax);
	for (let i = sqrtMax; i >= 2; i--) {
		let count = 0;
		for (let j = 2; j < i - 1; j++) {
			if (i % j === 0) {
				count++;
				break;
			}
		}
		// console.log('count', count);
		if (count === 0 && n % i === 0) {
			let backCount = 0;
			for (let k = i; k < n; k *= i) {
				if (n % k === 0) {
					backCount++;
				} else break;
			}
			if (backCount === 1) {
				ar.unshift(`(${i})`);
			} else {
				ar.unshift(`(${i}**${backCount})`);
			}

			// let x = n / i;
			// for (let j = 2; j < i - 1; j++) {
			// 	if (i % j === 0) {
			// 		count++;
			// 		break;
			// 	}
			// }

			// if (x > sqrtMax && x % 2 != 0 && x % 3 != 0) {
			// 	for (let m = 2; m < x; m++) {
			// 		if (x % m == 0) {
			// 			break;
			// 		}
			// 	}
			// 	ar.push(`(${x})`);
			// }
			// console.log('ar', ar);
		}
		n = n / i;
	}
	return ar.join('');
}

let a1 = primeFactors(7775460); //"(2**2)(3**3)(5)(7)(11**2)(17)"
let a2 = primeFactors(86240); //"(2**5)(5)(7**2)(11)"
let a3 = primeFactors(100); //"(2**2)(5**2)"
let a4 = primeFactors(119); //"(7)(17)"
let a5 = primeFactors(7919); //"(7919)"
let a6 = primeFactors(18195729); //"(3)(17**2)(31)(677)"

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
