// Perimeter of squares in a rectangle

/* 

Description:
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216

*/

// My solution:

function perimeter(n) {
    // let num = 0;
    let ar = [0, 1];
    for (let i = 2; i <= n + 1; i++) {
        ar[i] = parseInt(ar[i - 2]) + parseInt(ar[i - 1])
    }
    return 4 * (ar.reduce((a, b) => a + b))
}


let a1 = perimeter(0) // 4
let a2 = perimeter(5) // 80
let a3 = perimeter(7) // 216
let a4 = perimeter(20) // 114624
let a5 = perimeter(30) // 14098308

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5)