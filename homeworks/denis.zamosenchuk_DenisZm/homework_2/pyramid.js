const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const drawPyramid = (height) => {
    for (let i = 0; i < height; i++) {
        console.log(' '.repeat(height - 1 - i) + '*'.repeat(4 + i * 2));
    }
};

rl.question('What is the desired height of the pyramid? ', (answer) => {
    const height = parseInt(answer, 10);
    if (Number.isNaN(height) || height < 1) {
        console.log('Incorrect input, try again');
    } else {
        drawPyramid(height);
    }
    rl.close();
});
rl.write('15');
