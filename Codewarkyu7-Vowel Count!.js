// Vowel Count
/* 

Description:


*/

// My solution:

function getCount(str) {
  var vowelsCount = 0;

  let s = str.split("");
  // enter your majic here
  s.forEach(function (val) {
    if (val == "a" || val == "e" || val == "i" || val == "o" || val == "u")
      vowelsCount += 1;
  });

  return vowelsCount;
}
