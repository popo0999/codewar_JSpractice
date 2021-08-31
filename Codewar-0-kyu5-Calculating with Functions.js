// Calculating with Functions
// Not success

/* 

Description:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));


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