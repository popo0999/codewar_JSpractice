// Jaden Casing Strings

/* 

Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/

// My solution:

function findShort(s) {
  let ar = s.split(" ");
  let y = ar[0];
  let min = ar[0].length;
  //   console.log(min)
  for (let i = 1; i < ar.length; i++) {
    if (ar[i].length < min) {
      min = ar[i].length;
    }
  }
  return min;
}
