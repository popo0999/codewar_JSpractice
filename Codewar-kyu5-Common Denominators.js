// Common Denominators

/* 

Description:
Common denominators

You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

Note for Bash:
input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"

*/

// My solution:
function convertFrac(lst) {
    let x = 1
    let ar = []
    for(let i = 0; i<lst.length; i++){
        ar.push([lst[i][1]]);
        x *=lst[i][1];
        for(let j = [lst[i][1]]; j>0; j--){
            
        }
        let max = lsr[i][1]
    }
    let count = 0;
    for(let k = ; k<ar.length; k--){
        if()
    }
    for(let l = max; l>0; l--){
        
    }
    console.log(count)



    let y = [];
    for(let i = 0; i<lst.length; i++){
        // console.log(lst[i][0])
        y.push(`(${x/lst[i][1]},${x})`)
    }

    return y.join('')
    
}

// function getGcd(a, b) {
//     for (let i = a; i > 0; i--) {
//         for (let j = b; j > 0; j--) {
//             if (a % i === 0 && b % j === 0 && i === j) {
//                 return j;
//             }
//         }
//     }
// }


let a1 = convertFrac([
    [1, 2],
    [1, 3],
    [1, 4]
]) 
// "(6,12)(4,12)(3,12)"
let a2 = convertFrac([
    [69, 130],
    [87, 1310],
    [3, 4]
]) 
// "(18078,34060)(2262,34060)(25545,34060)"


// let a3 = perimeter(7) // 216
// let a4 = perimeter(20) // 114624
// let a5 = perimeter(30) // 14098308

console.log(a1);
console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5)