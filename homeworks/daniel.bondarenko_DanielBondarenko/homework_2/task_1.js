function outputThePyramid(height) {
    // typeof height from readline is always string
    if (parseInt(height) === Number(height)) {
        for (let i = 0; i < height; i++) {
            console.log((' ').repeat(height - i - 1) + ('#').repeat(4 + 2 * i) + (' ').repeat(height - i - 1));
        }
    } else {
        console.log('Please, enter a number');
    }
    return 0;
}

const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Please, enter a pyramid height ', (height) => {
    console.log(outputThePyramid(height));
    rl.close();
});

