const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isNumber(arg) {
    const checkNumber = parseInt(Math.ceil(arg), 10);
    return checkNumber;
}

function recursionSquare(arg) {
    if (arg === 1) {
        return true;
    }
    if (arg < 2) {
        return false;
    }
    return recursionSquare(arg / 2);
}

function checkRange(min, max) {
    if (min <= 0 || max <= 0) {
        console.log('\nYour min range or max range is less than or equal to 0.');
    }

    if (Number.isNaN(min) || Number.isNaN(max)) {
        console.log('\nYour min range or max range is not a valid range.');
    }
}

function getNumberOfDegreeTwo(min, max) {
    const arrayOfNumber = [];
    for (let i = min; i <= max; i++) {
        if (recursionSquare(i)) {
            arrayOfNumber.push(i);
        }
    }

    checkRange(min, max);

    return arrayOfNumber.length ? arrayOfNumber : '';
}

rl.question('Please, enter the minimum number in the range:\n', (min) => {
    rl.question('Please, enter the maximum number in the range:\n', (max) => {
        console.log(getNumberOfDegreeTwo(isNumber(min), isNumber(max)));
        rl.close();
    });
});
