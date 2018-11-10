// Generates the pyramid
function generatePyramid(maxRowsNumber) {
    const spaces = ' ';
    const hashTags = '#';
    const maxLength = maxRowsNumber * 2 + 2;
    for (let linesNumber = 1; linesNumber <= maxRowsNumber; linesNumber++) {
        const hashTagLength = linesNumber * 2 + 2;
        const spacesLength = (maxLength - hashTagLength) / 2;
        console.log(spaces.repeat(spacesLength) + hashTags.repeat(hashTagLength) + spaces.repeat(spacesLength));
    }
}

// Gets pyramids height and validate it
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Insert the pyramids height: ');

rl.on('line', (input) => {
    let pyramidsHeight = input;
    if (+pyramidsHeight && Number.isNaN(pyramidsHeight) && pyramidsHeight > 0) {
        pyramidsHeight = Math.floor(pyramidsHeight);
        generatePyramid(pyramidsHeight);
        rl.close();
    } else {
        console.log('Insert a positive number');
    }
});
