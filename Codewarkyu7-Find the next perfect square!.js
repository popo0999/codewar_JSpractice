// Find the next perfect square!
/* 

Description:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square 


*/

// My solution:

function findNextSquare(sq) {
  let x = Math.pow(sq, 0.5);
  if (x % 1 == 0) {
    let y = Math.pow(x + 1, 2);
    return y;
  } else {
    return -1;
  }
}
