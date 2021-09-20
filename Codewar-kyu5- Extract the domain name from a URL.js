// Extract the domain name from a URL

/* 

Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

// My solution:
function domainName(url) {
	let ar = url.split('');

	for (let i = 0; i < ar.length; i++) {
		if (
			(ar[0] != 'h' && ar[1] != 't' && ar[2] != 't') ||
			(ar[0] != 'w' && ar[1] != 'w' && ar[2] != 'w')
		) {
			if (ar[i] === '.') {
				ar.splice(i);
			}
		}
		if (ar[i] === 'w' && ar[i + 1] === 'w' && ar[i + 2] === 'w' && ar[i + 3] === '.') {
			ar.splice(i, 4);

			for (let i = 0; i < ar.length; i++) {
				if (ar[i] === '.') {
					ar.splice(i);
					break;
				}
			}
		}
	}
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === '/') {
			ar.splice(0, i + 2);
			break;
		}
	}
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === '.') {
			ar.splice(i);
			break;
		}
	}
	return ar.join('');
}

let a1 = domainName('google.com'); // "google");
let a2 = domainName('http://google.co.jp'); // "google");
let a3 = domainName('www.xakep.ru'); // "xakep");
let a4 = domainName('https://youtube.com'); // "youtube");
let a5 = domainName('http://www.9xv30mw0k2p3m.io/users');
let a6 = domainName('https://www.9xv30mw0k2p3m.io/users');
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
