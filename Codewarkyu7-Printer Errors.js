// Not success
// Printer Errors

/* 

Description:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"


*/

// My solution:

function printerError(s) {
  let ar = s.split("");
  let all = 0;
  let count = 0;
  console.log(s);

  for (let i = 0; i < ar.length; i++) {
    all += 1;
  }
  if (ar.includes("n")) {
    count += 1;
  }
  if (ar.includes("o")) {
    count += 1;
  }
  if (ar.includes("p")) {
    count += 1;
  }
  if (ar.includes("q")) {
    count += 1;
  }
  if (ar.includes("r")) {
    count += 1;
  }
  if (ar.includes("s")) {
    count += 1;
  }
  if (ar.includes("t")) {
    count += 1;
  }
  if (ar.includes("u")) {
    count += 1;
  }
  if (ar.includes("v")) {
    count += 1;
  }
  if (ar.includes("w")) {
    count += 1;
  }
  if (ar.includes("x")) {
    count += 1;
  }
  if (ar.includes("y")) {
    count += 1;
  }
  if (ar.includes("z")) {
    count += 1;
  }

  //   console.log()
  let ans = count + "/" + all;
  return ans;
}
