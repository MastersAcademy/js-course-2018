let space = 15;
let	first_line = 4;
for (let i = 1; i <= space; i++) {
	console.log (' '.repeat(space) + '#'.repeat(first_line));
	first_line +=2;
	space -=1;
};