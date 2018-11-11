const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function outputThePyramid(height) {
    // typeof height from readline is always string
    if (parseInt(height, 10) === Number(height)) {
        for (let i = 0; i < height; i++) {
            console.log(' '.repeat(height - i - 1) + '#'.repeat(4 + 2 * i));
        }
    } else {
        console.log('Please, enter a number');
    }
}

rl.question('Please, enter a pyramid height ', (height) => {
    outputThePyramid(height);
    rl.close();
});
