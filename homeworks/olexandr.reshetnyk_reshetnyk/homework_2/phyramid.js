const readline = require('readline-sync');

let height = process.argv[2];

if (typeof height === 'undefined') {
    height = readline.question('Type a number of rows: ');
}

function isNumeric(n) {
    return /\d+/i.test(n);
}

function inRange(n) {
    return n > 1;
}

if (!isNumeric(height)) {
    console.log('Argument isn\'t a number.');
    process.exit(-1);
} else if (!inRange(height)) {
    console.log('Argument must be more than 1.');
    process.exit(-1);
}

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
