const readline = require('readline');

let rangeStart;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function start() {
    rangeStart = null;
    console.log('\nPlease enter range start.');
    rl.prompt();
}

function isNumberValid(number, minNumber) {
    if (Number.isNaN(number)) {
        console.log('It\'s not a number. Try again.');
        return false;
    } if (number > Number.MAX_SAFE_INTEGER) {
        console.log(`Your number is too big. It mus be smaller than ${Number.MAX_SAFE_INTEGER}. Try again.`);
        return false;
    } if (number < minNumber) {
        console.log(`Your number is smaller than ${minNumber}. Try again.`);
        return false;
    }
    return true;
}

function logPalindromicNumbers(firstNumber, lastNumber) {
    function isPalyndromic(number) {
        const word = number.toString();
        const middleIndex = Math.ceil(word.length / 2);

        for (let i = 0; i < middleIndex; i++) {
            const mirroredIndex = word.length - 1 - i;

            if (word[i] !== word[mirroredIndex]) {
                return false;
            }
        }
        return true;
    }
    let hasFoundNumbers = false;
    console.log(`\nRange: ${firstNumber}...${lastNumber}`);

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (isPalyndromic(i)) {
            hasFoundNumbers = true;
            console.log(i);
        }
    }

    if (!hasFoundNumbers) {
        console.log('There is no palindromic numbers in given range.');
    }
}

function onNumberEnter(number) {
    if (rangeStart === null && isNumberValid(number, 0)) {
        rangeStart = number;
        console.log('Please enter range end.');
    } else if (rangeStart !== null && isNumberValid(number, rangeStart)) {
        logPalindromicNumbers(rangeStart, number);
        console.log('\n(Press ^C to quit)');
        start();
        return;
    }
    rl.prompt();
}

rl.setPrompt('Number > ');
rl.on('line', (line) => {
    const number = parseInt(line.trim(), 10);
    onNumberEnter(number);
}).on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
});

console.log('Welcome to Panufi (palindromic number finder)!');
console.log('The program finds all palindromic numbers in given range.');

start();
