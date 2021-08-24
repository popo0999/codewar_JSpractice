// You're a square!

/* 

Description:


*/

// My solution:

var isSquare = function (n) {
  let x = Math.pow(n, 0.5);
  if (x % 1 == 0) {
    return true;
  } else {
    return false;
  }
};
