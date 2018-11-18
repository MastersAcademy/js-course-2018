const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function Recursion(num, d = 2) {
    const newnum = Number(num);
    if ((d === newnum) || (newnum === 1)) {
        console.log(num);
        return;
    }
    if (d > num) {
        return;
    }
    Recursion(num, d * 2);
}

rl.on('line', (input) => {
    const temp = input.split(' ');
    const start = temp[0];
    const end = temp[1];
    for (let i = start; i < end; i++) {
        Recursion(i);
    }
    rl.close();
});
