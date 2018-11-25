const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const MIN_RANGE_NUMBER = 500;
const MAX_RANGE_NUMBER = 1000;

function mirrorNumbers(number) {
    for (let i = 1; i <= number; i++) {
        const str = `${i}`;
        if (str === str.split('').reverse().join('')) {
            console.log(str);
        }
    }
}

function checkRangeNumber(number) {
    return typeof +number !== 'number' || +number < MIN_RANGE_NUMBER || +number > MAX_RANGE_NUMBER;
}

rl.question('Enter a number in the range 500 - 1000: ', (answer) => {
    if (checkRangeNumber(answer)) {
        console.log('Sorry your answer is not correct');
        rl.close();
    }

    mirrorNumbers(answer);
    rl.close();
});
