let s;
let i = '##';
const p = ' ';
let z;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the number of lines:\n', (x) => {
    z = x;
    if (Math.round(x)) {
        for (s = 0; s < x; s++) {
            i += '##';
            z -= 1;
            console.log(p.repeat(z) + i);
            rl.close();
        }
    }
    if (isNaN(x)) {
        console.log('Error, value must be a number');
    }
});
