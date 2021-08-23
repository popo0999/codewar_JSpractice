// Sum of two lowest positive integers

/* 

Description:
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8


*/

// My solution:

function rowSumOddNumbers(n) {
  return n * n * n;
}

// 讓我回想起之前教數學的日子RRRRRRRRRR
// 也想起可愛的孩子們QQ

function rowSumOddNumbers(n) {
  let fSum = 1;
  for (let i = n; i > 0; i--) {
    let first = 2 * (i - 1);
    fSum += first;
    console.log("fSum", fSum);
  }
  let sum = ((fSum + (fSum + (n - 1) * 2)) * n) / 2;
  console.log(sum);
  return sum;
}
