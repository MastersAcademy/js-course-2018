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
    if (parseInt(x)) {
        for (s = 0; s < x; s++) {
            i += '##';
            z -= 1;
            console.log(p.repeat(z) + i);
            rl.close();
        }
    }
    else {
        console.log('Error, value must be a number!');
        rl.close();
    }
});
