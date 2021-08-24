// Descending Order

/* 

Description:


*/

// My solution:

function descendingOrder(n) {
  let ar = n.toString().split("");
  console.log(ar);
  let ar1 = [];
  let tmp = "";
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] < ar[j]) {
        tmp = ar[i];
        ar[i] = ar[j];
        ar[j] = tmp;
      }
    }
  }
  console.log(ar);
  let ar2 = ar.join("");
  let ar3 = Number(ar2);
  return ar3;
}
