const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const rangesArray = [];
let numberItem;
let reversedNumber;
let rightDigit;
let minRange;
let maxRange;
let isMinIsNumber;
let isMaxIsNumber;
let isMaxAndMinNumber;

function detectPalindromes(min, max) {
    for (let i = min; i <= max; i++) {
        numberItem = i;
        reversedNumber = 0;

        while (numberItem) {
            rightDigit = Math.floor(numberItem % 10);
            reversedNumber = reversedNumber * 10 + rightDigit;
            numberItem = Math.floor(numberItem / 10);
        }

        if (i === reversedNumber) {
            rangesArray.push(i.toString());
        }
    }

    console.log(`\nThe number of palindromes is: ${rangesArray.length} \n`);
    console.log(`Palindromes: ${rangesArray.join(', ')} \n`);
}

function declareConditions(min, max) {
    minRange = parseInt(Math.ceil(min), 10);
    maxRange = parseInt(Math.ceil(max), 10);
    isMinIsNumber = typeof minRange === 'number' && !Number.isNaN(minRange);
    isMaxIsNumber = typeof maxRange === 'number' && !Number.isNaN(maxRange);
    isMaxAndMinNumber = isMinIsNumber && isMaxIsNumber;
}

function validateRanges(min, max) {
    declareConditions(min, max);

    if (isMaxAndMinNumber) {
        if (minRange > 10 && maxRange > 10) {
            detectPalindromes(minRange, maxRange);
        } else if (minRange < 10 || maxRange < 10) {
            console.log(`Your min range: " ${min} "  or max range: " ${max} " is less than 10.`);
        }
    } else {
        console.log(`Your min range: " ${min} " or max range: " ${max} " is not a valid range.`);
    }
}

rl.question('Please, enter the minimum number in the range:\n', (min) => {
    rl.question('Please, enter the maximum number in the range, more than 10:\n', (max) => {
        validateRanges(min, max);
        rl.close();
    });
});
