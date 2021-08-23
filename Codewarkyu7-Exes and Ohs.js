// Jaden Casing Strings

/* 

Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/

// My solution:

function XO(str) {
  let ar = str.split("");
  console.log(ar);
  let z = 1;
  let y = 1;
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
    if (ar[i] == "x" || ar[i] == "X") {
      z += 1;
    }
    if (ar[i] == "o" || ar[i] == "O") {
      y += 1;
    }
  }

  if (z == y) {
    return true;
  } else {
    return false;
  }
}
