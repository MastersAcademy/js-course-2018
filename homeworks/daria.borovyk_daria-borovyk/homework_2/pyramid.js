const sharp = '#';
const space = ' ';
let firstLineSharps = 4;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter height of pyramid: ', (height) => {
    if (Number.isNaN(Number(height))) {
        console.log('Error: It is not a number');
    }
    else {
        let firstLineSpaces = height;
        for (i = 0; i < height; i++) {
            console.log(
                space.repeat(firstLineSpaces) + sharp.repeat(firstLineSharps)
            );
            firstLineSpaces--;
            firstLineSharps = firstLineSharps + 2;
        }
    }
    rl.close();
});
