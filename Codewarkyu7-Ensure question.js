// Ensure question
/* 

Description:


*/

// My solution:

function ensureQuestion(s) {
  if (s.endsWith("?")) {
    return s;
  } else {
    return `${s}?`;
  }
}
