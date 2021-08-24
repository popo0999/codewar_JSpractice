// Isograms

/* 

Description:


*/

// My solution:

function isIsogram(str) {
  let str1 = str.toLowerCase();
  let x = str1.split("");
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      console.log("x[i]", x[i], "x[j]", x[j]);
      if (x[i] == x[j]) {
        return false;
      }
    }
  }
  return true;
}
