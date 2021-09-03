// Simple Pig Latin
// Not success



/* 

Description:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// My solution:
function pigIt(str) {
    let ar = str.split(' ');
    let newAr = [];
    for (let i = 0; i < ar.length; i++) {
        for (let j = 1; j < ar[i].length; j++) {
            newAr.push(ar[i][j])
        }
        newAr.push([ar[i][0]]);
        if([ar[i][0]] == '!' || [ar[i][0]] == '?'){
            return (newAr.join(''));
        }
        newAr.push('ay');
        newAr.push(' ');
    }
    newAr.splice(-1, 1)
    return (newAr.join(''));

}


let a1 = pigIt('Pig latin is cool')
// 'igPay atinlay siay oolcay'

let a2 = pigIt('This is my string')
//'hisTay siay ymay tringsay'


let a3 = pigIt('Hello world !');     
// elloHay orldway !

console.log(a1);
console.log(a2);
console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6)