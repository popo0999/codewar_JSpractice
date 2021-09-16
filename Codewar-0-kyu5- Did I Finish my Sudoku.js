// Did I Finish my Sudoku?
// Not success

/* 

Description:

*/

// My solution:
function doneOrNot(board) {
	let sar = [];
	let copyBoard = [...board];
	console.log('board[1][1]', board[1][1]);
	console.log('ff', board[3][1]);
	for (let i = 0; i < 9; i++) {
		let ar = copyBoard[i].sort();
		// console.log(ar);
		for (let j = 1; j < 9; j++) {
			if (ar[j] - ar[j - 1] != 1) {
				return 'Try again!';
			}
		}
		for (let m = 0; m < 9; m++) {
			console.log('board[1][1]', board[1][1]);
			sar.push(board[m][i]);
			// console.log(m);
			// sar.sort();
		}
		console.log('sar', sar, i);
		// for (let n = 1; n < 9; n++) {
		// 	if (sar[n] - sar[n - 1] != 1) {
		// 		return 'Try again!';
		// 	}
		// }
		console.log('before sar', sar);
		sar = [];
		console.log('next sar', sar);
	}

	return 'Finished!';
}

/*
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
*/
let a3 = doneOrNot([
	[1, 3, 2, 5, 7, 9, 4, 6, 8],
	[4, 9, 8, 2, 6, 1, 3, 7, 5],
	[7, 5, 6, 3, 8, 4, 2, 1, 9],
	[6, 4, 3, 1, 5, 8, 7, 9, 2],
	[5, 2, 1, 7, 9, 3, 8, 4, 6],
	[9, 8, 7, 4, 2, 6, 5, 3, 1],
	[2, 1, 4, 9, 3, 5, 6, 8, 7],
	[3, 6, 5, 8, 1, 7, 9, 2, 4],
	[8, 7, 9, 6, 4, 2, 1, 3, 5],
]); // "Try again!");

// let a4 = primeFactors(119); //"(7)(17)"
// let a5 = primeFactors(7919); //"(7919)"
// let a6 = primeFactors(18195729); //"(3)(17**2)(31)(677)"

// console.log(a1);
// console.log(a2);
console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
