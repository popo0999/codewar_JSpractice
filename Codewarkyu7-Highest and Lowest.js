// Highest and Lowest
/* 

Description:


*/

// My solution:

function highAndLow(numbers) {
  let ar = numbers.split(" ");
  var max = ar[0];
  var min = ar[0];
  for (let j = 1; j < ar.length; j++) {
    console.log(max, min);
    if (+ar[j] > +max) {
      max = ar[j];
    }
    if (+ar[j] < +min) {
      min = ar[j];
    }
  }
  return `${max} ${min}`;
}
