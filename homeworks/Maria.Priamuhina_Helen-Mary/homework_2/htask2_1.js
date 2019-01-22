const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isNumber(obj) {
    return !Number.isNaN(parseFloat(obj));
}
console.log('enter number of Pyramids` layers:');
rl.on('line', (input) => {
    if (isNumber(input)) {
        const numSpace = input - 1;
        const space = ' ';
        const sharp = '##';
        const numSharp = 2;
        for (let iter = 0; iter < input; iter++) {
            console.log(space.repeat(numSpace - iter) + sharp.repeat(numSharp + iter));
        }
    } else {
        console.log('error.');
    }
    rl.close();
});
