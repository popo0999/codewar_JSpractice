// Jaden Casing Strings

/* 

Description:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


*/

// My solution:

String.prototype.toJadenCase = function () {
  let ar = this.split(" ");
  let s = "";
  for (let i = 1; i < ar.length; i++) {
    // console.log( ar[i][0])
    s += " " + ar[i][0].toUpperCase() + ar[i].slice(1);
  }
  let y = ar[0][0].toUpperCase() + ar[0].slice(1) + s;
  return y;
};
