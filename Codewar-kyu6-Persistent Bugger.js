// Persistent Bugger.

/* 

Description:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
 persistence(4) === 0 // because 4 is already a one-digit number

*/

// My solution:
// function persistence(num) {
//   console.log("num", num);
//   let count = 0;
//   let s = num.toString().split("");

//   if (s.length == 1) {
//     return 0;
//   }
//   if (s.length > 1) {
//     let nf = 1;
//     for (let i = 0; i < s.length; i++) {
//       console.log("s[i]", s[i]);
//       let n = Number(s[i]);
//       nf = nf * n;
//       console.log("ans", nf);
//     }
//   }
// }

// function persistence(num) {
//   if (num < 10) {
//     return 0;
//   } else {
//     let count = 0;
//     let s = num.toString().split("");
//     let nf = 1;
//     for (let i = 0; i < s.length; i++) {
//       console.log("s[i]", s[i]);
//       let n = Number(s[i]);
//       nf = nf * n;
//       console.log("ans", nf);
//       if (nf > 9) {
//         count += 1;
//       }
//     }
//     return count;
//   }
// }

// 想了很久，嘗試很多個，最後還是決定上網找答案
// 看了滿多都有用reduce解答，心想也該是時候要來接收新的東西，使用新的東西了
// 之前可能有用過，但還是很不熟啊!!!! 花了一些時間終於又更搞懂一些，希望未來可以運用自如XD
// google果然是我們的好夥伴(讚嘆

function persistence(num) {
  if (num < 10) {
    return 0;
  } else {
    let count = 0;
    while (num.toString().length > 1) {
      num = num
        .toString()
        .split("")
        .reduce((a, b) => a * b);
      count += 1;
    }
    return count;
  }
}

console.log(persistence(39));
//persistence(39); //3
// persistence(4);
// persistence(25);
// persistence(999);
