// Diophantine Equation
// Not success



/* 

Description:

In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

x2 - 4 * y2 = n
(where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

Examples:
solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
solEquaStr(90002) --> "[]"
Hint:
x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
Math.pow(i,2)
*/

// My solution:
// function solequa(n) {
//     let ar = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = 0 ; j < n; j++) {
//             if ((Math.pow(i,2) - 4*Math.pow(j,2))== n) {
//                 ar.push([i, j])
//             }
//         }
//     }
//     return ar;
// }

function solequa(n) {
    let numC = Math.ceil(n/2);
    let num = Math.floor(n/4);
    let ar = [];
    for (let i = numC; i >= 0; i--) {
        for (let j = num ; j >= 0; j--) {
            if ((i - 2 * j) * (i + 2 * j) == n) {
                ar.push([i, j])
            }
        }
    }
    return ar;
}


let a1 = solequa(5) // [[3, 1]])
let a2 = solequa(12) // [[4, 1]])
let a3 = solequa(13) // [[7, 3]]) 
let a4 = solequa(16) // [[4, 0]])
let a5 = solequa(9009) // "[]"
let a6 = solequa(90005)
// "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6)