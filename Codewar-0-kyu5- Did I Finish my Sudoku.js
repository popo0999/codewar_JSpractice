// Did I Finish my Sudoku?
// Not success

/* 

Description:

*/

// My solution:
function doneOrNot(board) {
	//your code here
}

let a1 = doneOrNot([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9],
]); // "Finished!");

let a2 = doneOrNot([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 0, 3, 4, 9],
	[1, 0, 0, 3, 4, 2, 5, 6, 0],
	[8, 5, 9, 7, 6, 1, 0, 2, 0],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 0, 1, 5, 3, 7, 2, 1, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 0, 0, 4, 8, 1, 1, 7, 9],
]); // "Try again!");

// let a3 = primeFactors(100); //"(2**2)(5**2)"
// let a4 = primeFactors(119); //"(7)(17)"
// let a5 = primeFactors(7919); //"(7919)"
// let a6 = primeFactors(18195729); //"(3)(17**2)(31)(677)"

console.log(a1);
console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
