// Complementary DNA

/* 

Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input: output)

DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" 

*/

// My solution:

function DNAStrand(dna) {
	let ar = dna.split('');
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === 'T') {
			ar[i] = 'A';
		} else if (ar[i] === 'A') {
			ar[i] = 'T';
		} else if (ar[i] === 'G') {
			ar[i] = 'C';
		} else if (ar[i] === 'C') {
			ar[i] = 'G';
		}
	}
	return ar.join('');
}

let a1 = DNAStrand('AAAA'); //"TTTT","String AAAA is")

let a2 = DNAStrand('ATTGC'); //"TAACG","String ATTGC is")

let a3 = DNAStrand('GTAT'); //"CATA","String GTAT is")

console.log(a1);
console.log(a2);
console.log(a3);
