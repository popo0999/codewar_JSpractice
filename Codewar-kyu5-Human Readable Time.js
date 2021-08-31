// Human Readable Time


/* 

Description:


Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

// My solution:

function humanReadable(s) {
    if (s < 10) {
        return `00:00:0${s}`
    }
    if (s < 60) {
        return `00:00:${s}`
    }
    if (s < 3600) {
        let min = Math.floor(s / 60);
        if (min < 10) {
            min = `0${min}`
        }
        let minSec = s % 60
        if (minSec < 10) {
            minSec = '0' + minSec;
        }
        return `00:${min}:${minSec}`
    }

    let hour = Math.floor(s / 60 / 60)
    if (hour < 10) {
        hour = `0${hour}`
    }

    let hourMin = Math.floor(s / 60) - hour * 60;
    if (hourMin < 10) {
        hourMin = `0${hourMin}`
    }
    let hourMinSec = s % 60
    if (hourMinSec < 10) {
        hourMinSec = '0' + hourMinSec;
    }
    return `${hour}:${hourMin}:${hourMinSec}`


}


let a1 = humanReadable(0); // '00:00:00', 'humanReadable(0);
let a2 = humanReadable(5); //00:00:05' humanReadable(5)');
let a3 = humanReadable(60); //00:01:00' humanReadable(60)');
let a4 = humanReadable(86399); //23:59:59' humanReadable(86399)');
let a5 = humanReadable(359999); //99:59:59' humanReadable(359999)');
let a6 = humanReadable(3772);

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6)