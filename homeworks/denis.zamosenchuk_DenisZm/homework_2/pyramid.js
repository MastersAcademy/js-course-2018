const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the desired height of the pyramid? ', (answer) => {
    var height = parseInt(answer, 10);
    if (isNaN(height)) {
        console.log('Incorrect input, try again');
    } else {
        drawPyramid(height);
    }
    rl.close();
});
rl.write('15');

const drawPyramid = (height) => {
    for (let i = 0; i < height; i++) {
        console.log(' '.repeat(height - 1 - i) + '*'.repeat(4 + i * 2));
    }
};
