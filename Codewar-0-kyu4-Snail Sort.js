// Snail Sort
// Not success

/* 

Description:

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/

// My solution:
snail = function (array) {
    for (let i = 0; i < array.length; i++) {
        for (let i = 0; i < array.length; i++) {
            
        }
    }
}



let a = snail([
    []
]); // [];

let b = snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
])
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

let c = snail([
    [1]
]) // [1];

let d = snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
// [1, 2, 3, 6, 9, 8, 7, 4, 5];

let e = snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
])
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
// let f = five(times(five()));

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// console.log(f);


/*


*/