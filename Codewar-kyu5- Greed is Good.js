// Greed is Good
// Not success

/* 

Description:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

*/

// My solution:
function score(dice) {
	let ar = dice.sort();
	console.log('ar', ar);
	// console.log(ar[0] === ar[2]);
	let s = 0;
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === ar[i + 2]) {
			if (ar[i] == 2) {
				console.log('this is 2');
				s += 200;
				ar[i] = ar[i + 1] = ar[i + 2] = 9;
			}
			if (ar[i] == 3) {
				s += 300;
				ar[i] = ar[i + 1] = ar[i + 2] = 9;
			}
			if (ar[i] == 4) {
				s += 400;
				ar[i] = ar[i + 1] = ar[i + 2] = 9;
			}
			if (ar[i] == 5) {
				s += 500;
				ar[i] = ar[i + 1] = ar[i + 2] = 9;
			}
			if (ar[i] == 6) {
				s += 600;
				ar[i] = ar[i + 1] = ar[i + 2] = 9;
			}
			if (ar[i] == 1) {
				s += 1000;
				ar[i] = ar[i + 1] = ar[i + 2] = 9;
			}
		}
		if (ar[i] === 1) {
			s += 100;
			ar[i] = 9;
		}
		if (ar[i] === 5) {
			s += 50;
			ar[i] = 9;
		}
	}
	console.log(ar);
	return s;
}

let a1 = score([2, 3, 4, 6, 2]); // 0,   "Should be 0 :-("
let a2 = score([4, 4, 4, 3, 3]); // 400, "Should be 400" );
let a3 = score([2, 4, 4, 5, 4]); // 450, "Should be 450" );
// let a4 = domainName('https://youtube.com'); // "youtube");
// let a5 = primeFactors(7919); //"(7919)"
// let a6 = primeFactors(18195729); //"(3)(17**2)(31)(677)"

console.log(a1);
console.log(a2);
console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
