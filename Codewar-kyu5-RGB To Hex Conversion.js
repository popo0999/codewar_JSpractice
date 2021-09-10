// RGB To Hex Conversion

/* 

Description:

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

// My solution:
function rgb(r, g, b) {
	if (r > 255) {
		r = 255;
	}
	if (g > 255) {
		g = 255;
	}
	if (b > 255) {
		b = 255;
	}
	if (r < 0) {
		r = 0;
	}
	if (g < 0) {
		g = 0;
	}
	if (b < 0) {
		b = 0;
	}
	r = r.toString(16).toUpperCase();
	g = g.toString(16).toUpperCase();
	b = b.toString(16).toUpperCase();
	if (r.length < 2) {
		r = `0${r}`;
	}
	if (g.length < 2) {
		g = `0${g}`;
	}
	if (b.length < 2) {
		b = `0${b}`;
	}
	return `${r}${g}${b}`;
}

let a1 = rgb(0, 0, 0); // '000000'
let a2 = rgb(0, 0, -20); // '000000'
let a3 = rgb(300, 255, 255); // 'FFFFFF'
let a4 = rgb(173, 255, 47); // 'ADFF2F'

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
// console.log(a5);
// console.log(a6)
