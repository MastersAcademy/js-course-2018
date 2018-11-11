const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function isNumeric(height) {
    return /\d+/i.test(height);
}

function inRange(height) {
    return height > 1;
}

function printPyramid(height) {
    const lineWidth = 2 + height * 2;
    let symbolsCount = 2;
    let spacesCount = (lineWidth - symbolsCount) / 2;

    for (let i = 0; i < height; i++) {
        symbolsCount += 2;
        spacesCount = (lineWidth - symbolsCount) / 2;
        const spaces = ' '.repeat(spacesCount);
        const symbols = '#'.repeat(symbolsCount);
        const line = spaces + symbols + spaces;
        console.log(line);
    }
}

rl.question('Type a number of rows: ', (height) => {
    console.log(height);
    if (isNumeric(height) && inRange(height)) {
        printPyramid(height);
    } else {
        console.log('Bad argument!');
    }
    rl.close();
});
