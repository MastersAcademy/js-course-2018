const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let rangeStart;

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

function start() {
    rangeStart = null;

    console.log('\nPlease enter range start.');
    rl.prompt();    
}

function onNumberEnter (number) {

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

function isNumberValid (number, minNumber) {
    if (isNaN(number)) {
        console.log('It\'s not a number. Try again.');
        return false;

    } else if (number > Number.MAX_SAFE_INTEGER) {
        console.log('Your number is too big. It mus be smaller than ' + Number.MAX_SAFE_INTEGER + '. Try again.');
        return false;

    } else if (number < minNumber) {
        console.log('Your number is smaller than ' + minNumber + '. Try again.');
        return false;
    }

    return true;
}

function logPalindromicNumbers (start, end) {
    let hasFoundNumbers = false;

    console.log('\nRange: ' + start + '...' + end);

    for (let i = start; i <= end; i++) {
        if (isPalyndromic(i)) {
            hasFoundNumbers = true;
            console.log(i);
        }
    }

    if (!hasFoundNumbers) {
        console.log('There is no palindromic numbers in given range.');
    }

    function isPalyndromic(number) {
        word = number.toString();
        middleIndex = Math.ceil(word.length / 2);

        for (let i = 0; i < middleIndex; i++) {
            mirroredIndex = word.length - 1 - i;

            if (word[i] !== word[mirroredIndex]) {
                return false;
            }
        }

        return true;
    }
}