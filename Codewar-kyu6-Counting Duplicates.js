// Counting Duplicates

/* 

Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

// My solution:
function duplicateCount(text) {
  let ar = text.toLowerCase().split("");
  let newAr = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] == ar[j]) {
        newAr.push(ar[i]);
      }
    }
  }
  let count = 0;
  console.log(newAr);
  for (let i1 = 0; i1 < newAr.length; i1++) {
    for (let j1 = i1 + 1; j1 < newAr.length; j1++) {
      if (newAr[i1] != newAr[j1]) {
        count += 1;
      }
    }
  }
}
