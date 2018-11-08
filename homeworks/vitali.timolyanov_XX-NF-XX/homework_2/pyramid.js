const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Please enter pyramid height.');

rl.setPrompt('Number > ');
rl.prompt();

rl.on('line', (line) => {
    const height = parseInt(line.trim(), 10);

    if (isNaN(height)) {
        console.log('It\'s not a number. Try again.');

    } else if (height < 3) {
        console.log('Your number is too small. Try again.');

    } else if (height > 50) {
        console.log('Your number is too big. Try again.');

    } else {
        drawPyramid(defaultPyramidTopWidth, height);
        console.log('Please enter pyramid height.');
    }

    rl.prompt();

}).on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
});


function drawPyramid (height) {
    const topWidth = 4;
    const space = ' ';
    const brick = '#';

    let pyramid = '\n';

    for (let i = 0; i < height; i++) {
        let spaces = height - i;
        let bricks = topWidth + i * 2;

        pyramid += space.repeat(spaces) + brick.repeat(bricks) + '\n';
    }

    console.log(pyramid);
}