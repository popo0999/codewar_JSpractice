// Sum of two lowest positive integers

/* 

Description:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


*/

// My solution:

function sumTwoSmallestNumbers(numbers) {
  let y = numbers.sort(function (a, b) {
    return a - b;
  });
  //   console.log(y);
  let x = y[0] + y[1];
  //   console.log(x);
  return x;
}
