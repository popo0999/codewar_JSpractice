// The Hashtag Generator




/* 

Description:

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

// My solution:
function generateHashtag(str) {
    console.log('str', str)
    str = str.replace(/  +/g, ' ');
    if (str == '' || str == ' ') {
        return false;
    }
    let ar = str.split('')
    ar.unshift('#')

    console.log('ar', ar)
    for (let i = 0; i < ar.length; i++) {
        
            ar[1] = ar[1].toUpperCase()
            // ar.splice(i, 1)
            
        if (ar[i] == ' ') {
            // console.log(ar[i+1].toUpperCase());
            ar[i + 1] = ar[i + 1].toUpperCase()
            ar.splice(i, 1)
            i--
            // console.log('in', ar.join(''))
        }
    }

    if (ar.length > 140) {
        return false
    }

    return ar.join('');
}


// let a1 = generateHashtag("") // false
let a2 = generateHashtag("code" + " ".repeat(140) + "wars") // "#CodeWars"
let a3 = generateHashtag("Do We have A Hashtag") // "#DoWeHaveAHashtag"
let a4 = generateHashtag(" ".repeat(200)) // false
// let a5 = generateHashtag("a".repeat(139)) //"#A" + "a".repeat(138), "Should work")"
// let a6 = generateHashtag("a".repeat(140)) // false, "Too long")

// console.log("a".repeat(139))
// console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
// console.log(a5);
// console.log(a6);