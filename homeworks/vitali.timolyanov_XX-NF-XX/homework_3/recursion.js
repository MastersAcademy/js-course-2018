const readline = require('readline');

const defaultMinNumber = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
});

function isPowOfTwo(number) {
    if (number > 1) {
        return isPowOfTwo(number / 2);
    }
    if (number === 1) {
        return true;
    }
    return false;
}

function logPowOfTwoInRange(rangeStart, rangeEnd) {
    console.group();
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (isPowOfTwo(i)) {
            console.log(i);
        }
    }
    console.groupEnd();
}

function isNumberValid(number, minNumber) {
    if (Number.isNaN(number)) {
        console.log('It\'s not a number. Try again.');
        return false;
    }
    if (number > Number.MAX_SAFE_INTEGER) {
        console.log(`Your number is too big. It mus be smaller than ${Number.MAX_SAFE_INTEGER}. Try again.`);
        return false;
    }
    if (number < minNumber) {
        console.log(`Your number is smaller than ${minNumber}. Try again.`);
        return false;
    }
    return true;
}

function requestRangeNumber(minNumber, subject, callback) {
    rl.question(`Please enter ${subject} > `, (answer) => {
        const number = parseInt(answer.trim(), 10);
        if (isNumberValid(number, minNumber)) {
            callback(number);
        } else {
            requestRangeNumber(minNumber, subject, callback);
        }
    });
}

function start() {
    let rangeStart = 0;
    let rangeEnd = 0;

    function onRangeEndEntered(number) {
        rangeEnd = number;
        logPowOfTwoInRange(rangeStart, rangeEnd);
        start();
    }

    function onRangeStartEntered(number) {
        rangeStart = number;
        requestRangeNumber(rangeStart, 'range end', onRangeEndEntered);
    }

    requestRangeNumber(defaultMinNumber, 'range start', onRangeStartEntered);
}

function showGreeting() {
    console.log('Welcome to Potofi (power of two finder)!');
    console.log('The program finds powers of two in given range.');
    start();
}

showGreeting();
