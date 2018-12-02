const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const buildPyramid = (height) => {
    const background = ' ';
    const symbol = '#';
    const vertexStart = 4;
    let line;
    for (let i = 0; i < height; i++) {
        line = background.repeat(height - i - 1)
            + symbol.repeat(vertexStart + i * 2)
            + background.repeat(height - i - 1);
        console.log(line);
    }
};

rl.question('Pyramid height (lines) = ', (answer) => {
    const height = +answer;
    if (!Number.isInteger(height) || height <= 0) {
        // \x1b[1;31m - for color output in console
        console.log('\x1b[1;31mWrong input! Must be positive integer number.\x1b[0m');
        process.exit(1);
    }

    buildPyramid(height);

    rl.close();
    process.exit(0);
});
