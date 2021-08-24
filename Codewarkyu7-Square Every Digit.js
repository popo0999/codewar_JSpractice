// Square Every Digit

/* 

Description:


*/

// My solution:

function squareDigits(num) {
  //   console.log(typeof(num))
  let num1 = num.toString();
  let z = num1.split("");
  let y = "";
  //     console.log(z[0])
  //       console.log(typeof(z[0]))

  for (let i = 0; i < z.length; i++) {
    //     console.log(z[i]);
    let x2 = Number(z[i]);
    //     console.log(x2);
    //     console.log(typeof(x2));

    let x = Math.pow(x2, 2);
    console.log(x);

    let x1 = x.toString();
    console.log(x1);
    console.log(typeof x1);
    y = y + x1;
  }
  return Number(y);
}
