// Common Denominators

/* 

Description:
Common denominators

You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

Note for Bash:
input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"

*/

// My solution:
function convertFrac(lst) {
	console.log('lst', lst);
	if (lst.length == 0) {
		return '';
	}
	let k = 1;
	for (let i = 0; i < lst.length; i++) {
		k = lcm(k, lst[i][1], getGcd(k, lst[i][1]));
	}

	for (let i = 0; i < lst.length; i++) {
		lst[i][0] = (k / lst[i][1]) * lst[i][0];
	}

	let ans = '';
	for (let i = 0; i < lst.length; i++) {
		ans += `(${lst[i][0]},${k})`;
	}

	// let ans = `(${lst[0][0]},${k})(${lst[1][0]},${k})(${lst[2][0]},${k})`;
	// console.log("return", ans);
	return ans;
}

function getGcd(a, b) {
	if (a % b === 0) return b;
	else return getGcd(b, a % b);
}

function lcm(n, m, r) {
	return (n * m) / r;
}

let a1 = convertFrac([
	[1, 2],
	[1, 3],
	[1, 4],
]);
// "(6,12)(4,12)(3,12)"
let a2 = convertFrac([
	[69, 130],
	[87, 1310],
	[3, 4],
]);
// "(18078,34060)(2262,34060)(25545,34060)"

let a3 = convertFrac([]);
let a4 = convertFrac([
	[1, 100],
	[3, 1000],
	[1, 2500],
	[1, 20000],
]); // (200,20000)(60,20000)(8,20000)(1,20000)

// let a5 = perimeter(30) // 14098308

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
// console.log(a5)
