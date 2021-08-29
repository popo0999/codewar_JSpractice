// Unique In Order

/* 

Description:


Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

// My solution:
var uniqueInOrder = function (ite) {
	if (ite == []) {
		return [];
	}
	if (typeof ite == 'object') {
		let newAr = [ite[0]];
		for (let i = 0; i < ite.length - 1; i++) {
			if (ite[i] != ite[i + 1]) {
				newAr.push(ite[i + 1]);
			}
		}
		return newAr;
	}

	let x = ite.split('');
	let ar = [x[0]];
	for (let i = 0; i < x.length - 1; i++) {
		if (x[i] != x[i + 1]) {
			console.log(x[i + 1]);
			ar.push(x[i + 1]);
		}
	}
	return ar;
};
