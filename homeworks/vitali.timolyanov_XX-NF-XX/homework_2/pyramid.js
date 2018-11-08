const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Welcome to pyramid builder!');
console.log('Please enter pyramid height.');

rl.setPrompt('Number 3...50 > ');
rl.prompt();

rl.on('line', (line) => {
    const height = parseInt(line.trim(), 10);

    if (isHeightValid(height)) {
        drawPyramid(height);
        console.log('Please enter new pyramid height.');
    }

    rl.prompt();

}).on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
});

function isHeightValid (height) {
    if (isNaN(height)) {
        console.log('It\'s not a number. Try again.');
        return false;

    } else if (height < 3) {
        console.log('Your number is too small. Try again.');
        return false;

    } else if (height > 50) {
        console.log('Your number is too big. Try again.');
        return false;
    }

    return true;
}

function drawPyramid (height) {
    const topWidth = 4;
    const space = ' ';
    const brick = '#';

    let pyramid = '\n';

    for (let i = 0; i < height; i++) {
        const spaces = height - i;
        const bricks = topWidth + i * 2;

        pyramid += space.repeat(spaces) + brick.repeat(bricks) + '\n';
    }

    console.log(pyramid);
}