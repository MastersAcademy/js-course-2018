const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function outputThePyramid(countStr) {
    if (parseInt(countStr, 10) === Number(countStr)) {
        Emptystr = ' ';
        strFirst = 'xxxx';
        strPlus = 'xx'
        maxSymbol = 2 * (countStr - 1) + 4;
        console.log(Emptystr.repeat(countStr) + strFirst);
        for (let i = 1; i <= countStr; i++) {
            console.log(Emptystr.repeat(countStr - i) + strPlus.repeat(i) + strFirst);

        }
    } else {
        console.log('Please, enter a number');
    }
}

rl.question('Please, enter a pyramid height ', (countStr) => {
    outputThePyramid(countStr);
    rl.close();
});