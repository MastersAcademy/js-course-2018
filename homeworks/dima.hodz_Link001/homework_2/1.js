const readline = require('readline');

const a = readline.createInterface({ 
	input: process.stdin, 
	output: process.stdout });

function piramid(length) {
	let top = "****";
	for (i=0; i<length; i++){
    console.log(' '.repeat(a-i)+top);
    top += "**";
	}
} 
a.question('length of piramid:', (length) => {
    piramid(length);
    a.close();
});