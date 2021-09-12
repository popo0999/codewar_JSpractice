// Double Cola

/* 

Description:
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

Input:
The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

Output / Examples:
Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

*/

// My solution:
function whoIsNext(names, r) {
	console.log(names);
	console.log(r);
	let sum = 0;
	let sumD = 0;
	// let num = 0;
	for (let i = 0; i <= 50; i++) {
		// num++;
		sum += Math.pow(2, i) * names.length;
		if (i - 1 >= 0) sumD += Math.pow(2, i - 1) * names.length;
		// console.log('sum', sum);
		// console.log('sumD', sumD, num);
		if (r < sum && r > sumD) {
			if (r < names.length) {
				return names[r - 1];
			}
			let num2 = Math.floor((r - sumD) / Math.pow(2, i));
			if ((r - sumD) % Math.pow(2, i) === 0) {
				return names[num2 - 1];
			}
			return names[num2];
		}
	}
}

let a1 = whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1); // "Sheldon"
let a2 = whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52); // "Penny"

let a3 = whoIsNext(
	[
		'Howard',
		'Yano',
		'Daisuke Aramaki',
		'Borma',
		'Penny',
		'Motoko Kusanagi',
		'Togusa',
		'Azuma',
		'Leonard',
		'Batou',
	],
	950
); // "Penny"

// let a4 = primeFactors(119); //"(7)(17)"
// let a5 = primeFactors(7919); //"(7919)"
// let a6 = primeFactors(18195729); //"(3)(17**2)(31)(677)"

// console.log(a1);
console.log(a2);
console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
