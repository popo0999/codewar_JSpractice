// Number of trailing zeros of N!



/* 

Description:

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

*/

// My solution:
// 應該可以好好來打一下想法了
// 試了很多個算式，結果QQ JS都跑不動
// 最後只好來拆解想一下該如何簡單算
/*
結尾為0的意思，故為2*5的倍數，因為2的倍數多到爆炸，故我們可以算5的倍數有幾個就好了*/
function zeros(n) {
    let count = 0;
    // 先計算5*?(f1) = n
    let f1 = Math.floor(n / 5)

    // 現在得知n的因數至少有(f1)個5，接下來要算的是f1裡面有沒有也是5的倍數的
    // 因為假設f1包含25這個數字，25=5*5，不只含有一個5 RRRRRRRR
    for(let i = 1; i<=20; i++){        
        f1 = Math.floor(f1 / 5)
        count += f1
    }
    console.log('count', f1)

    // 最後相加起來
    let ans = Math.floor(n / 5) + count
    return ans;
}



// JS 太多位元會爆掉QQ
// function zeros(n) {
//     let sum = 1;
//     for (let i = n; i > 0; i--) {
//         sum *= i
//     }
//     console.log(sum)
//     let ar = sum.toString().split('');
//     let count = 0;
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i] == 0) {
//             count++;
//         }
//         if (ar[i] == 0 && ar[i+1] != 0 && i < ar.length-1) {
//             count = 0
//             continue;
//         }
//     }
//     return count;
// }



let a1 = zeros(0) // 0, 
let a2 = zeros(5) // 1, 
let a3 = zeros(1000000000) // 249999998
let a4 = zeros(30) // 7,
let a5 = zeros(100000) // 24999


console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
// console.log(a6)