const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.question('Enter the height of the pyramid: ', (max) => {
    for (let i = 0; i < max; i++) {
        const space = ' ';
        const sign = '#';
        const a = space.repeat(max - i);
        const out = (a + sign.repeat(i)) + (sign.repeat(i) + space.repeat(max - i));
        console.log(out);
    }
    read.close();
});
