// Valid Parentheses
// Not success

/* 

Description:


Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100


*/

// My solution:

function validParentheses(p) {
    if(p==''){
        return true;
    }
    let ar = p.split('')
    console.log(ar)
    let count = 0;
    for(let i = 0; i<ar.length; i++){
        if(ar[i]=='('){
            ar[i] = 1;
            count++
        }
        if(ar[i]==')'){
            ar[i] = 2;
            count--
        }
        if(count<0){
            return false;
        }
    }
    console.log(ar)
    let x = ar.reduce((a,b)=>a+b)
    if(x%3==0){
        return true;
    }else{
        return false;
    }

}

let a1 = validParentheses("()")  //  true;
let a2 = validParentheses("())")  //false;
let a3 = validParentheses("())(")  //false
let a4 = validParentheses("")  //false


console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(2%3)