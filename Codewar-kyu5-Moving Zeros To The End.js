// Moving Zeros To The End

/* 

Description:


Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

// My solution:

function moveZeros(arr) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===0){
            arr.splice(i,1);
            i--
            count++;
        }
    }
    for(let j = 1; j<=count; j++){
        arr.push(0);
    }
    return arr;
}


let a1 = moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
let a2 = moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]);
let a3 = moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

console.log(a1);
console.log(a2);
console.log(a3);