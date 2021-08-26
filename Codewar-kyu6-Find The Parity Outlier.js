// Find The Parity Outlier

/* 

Description:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

// My solution:
function findOutlier(int) {
  console.log(int);

  let odd = 0;
  let even = 0;
  for (let i = 0; i < int.length; i++) {
    if ((Math.abs(int[i]) % 2) % 2 == 1) {
      odd += 1;
    }
    if (int[i] % 2 == 0) {
      even += 1;
    }
  }
  if (odd == 1) {
    for (let i = 0; i < int.length; i++) {
      if (Math.abs(int[i]) % 2 == 1) {
        return int[i];
      }
    }
  }
  if (even == 1) {
    for (let i = 0; i < int.length; i++) {
      if (int[i] % 2 == 0) {
        return int[i];
      }
    }
  }
}

// function findOutlier(integers) {
//   integers.forEach(function (r) {
//     if (r % 2 == 1) {
//       console.log(r, typeof r);
//       return r;
//     }
//   });
//   //   return "y";
// }
// let x = findOutlier([2, 6, 8, 10, 3]);

// console.log(x);
