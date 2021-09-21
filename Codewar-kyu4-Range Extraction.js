// Range Extraction

/* 

Description:
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

// My solution:
function solution(list) {
	console.log(list);
	let ar = [];
	let str = '';
	let count = 0;
	for (let i = 0; i < list.length; i++) {
		if (Math.abs(list[i] - list[i + 1]) != 1 || Math.abs(list[i - 1] - list[i]) != 1) {
			if (Math.abs(list[i] - list[i + 1]) != 1 && Math.abs(list[i - 1] - list[i]) != 1) {
				str += `${list[i]},`;
			} else if (
				Math.abs(list[i] - list[i + 1]) != 1 &&
				Math.abs(list[i - 2] - list[i]) === 2
			) {
				str += `${list[i]},`;
			} else if (
				Math.abs(list[i] - list[i + 2]) === 2 &&
				Math.abs(list[i - 1] - list[i]) != 1
			) {
				str += `${list[i]}-`;
			} else {
				str += `${list[i]},`;
			}
		}
	}
	let newStr = str.slice(0, str.length - 1);
	console.log(newStr);
}

let a = solution([
	-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
]); // "-6,-3-1,3-5,7-11,14,15,17-20

// let b = nextBigger(513); // 531
// let c = nextBigger(2017); // 2071
// let d = nextBigger(414); // 441
// let e = nextBigger(144); // 414
// let f = nextBigger(531) // returns nil

console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

/*
 */
