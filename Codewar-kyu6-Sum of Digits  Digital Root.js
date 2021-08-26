// Sum of Digits / Digital Root

/* 

Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6


*/

// My solution:
function digital_root(n) {
  let s = n.toString();
  let sum = 0;
  let s1 = s.split("");
  s1.forEach(function (v) {
    let v1 = Number(v);
    sum += v1;
  });
  console.log(sum, typeof sum);

  if (sum > 9) {
    let newSum = 0;
    let s1 = sum.toString();
    let sum1 = s1.split("");
    sum1.forEach(function (v2) {
      let v3 = Number(v2);
      newSum += v3;
    });
    if (newSum > 9) {
      let nSum = 0;
      let s2 = newSum.toString();
      let sum2 = s2.split("");
      sum2.forEach(function (v3) {
        let v4 = Number(v3);
        nSum += v4;
      });
      console.log("nSum", nSum);
      return nSum;
    } else {
      console.log("newSum", newSum);
      return newSum;
    }
  } else {
    return sum;
  }
}
