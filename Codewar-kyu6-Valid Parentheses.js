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
function zero() {
    return 0;
}

function one() {
    return 1;
}

function two() {
    return 2;
}

function three() {
    return 3;
}

function four() {
    return 4;
}

function five(a) {
    return 5;
}

function six() {
    return 6;
}

function seven(a) {
    return 7 + a;
}

function eight() {
    return 8;
}

function nine() {
    return 9;
}

function plus() {
    return '+';
}

function minus(a) {
    return '-' + a;
}

function times(a) {
    return '*' + a;
}

function dividedBy() {
    return '/';
}

let a = seven(times(five())); // 35
let b = four(plus(nine())); // 13
let c = eight(minus(three())); // 5
let d = six(dividedBy(two())); // 3
let e = times(five());
let f = five(times(five()));

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);