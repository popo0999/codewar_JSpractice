// Where my anagrams at??



/* 

Description:
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.

*/

// My solution:
function anagrams(word, words) {
    let q = word.split('').sort().join('');
    // console.log('q',q)
    let newAr = [];
    for (let i = 0; i < words.length; i++) {
        let ans = words[i].split('').sort().join('')
        // console.log('ans',ans)
        if (ans == q) {
            // console.log('hi')
            newAr.push(words[i])
        }
    }
    return newAr
}

let a1 = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
// ['aabb', 'bbaa']

let a2 = anagrams('laser', ['lazing', 'lazy', 'lacer']) // []

let a3 = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
// ['carer', 'racer']

console.log(a1);
console.log(a2);
console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6)