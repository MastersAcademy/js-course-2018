const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isPowerOfTwo(number) {
    if (number === 2 || number === 1) {
        return true;
    }
    if (!number || number % 2 !== 0) {
        return false;
    }
    return isPowerOfTwo(number / 2);
}

rl.question('PLEASE ENTER "MIN-MAX": ', (answer) => {
    const arr = answer.split('-');
    const min = parseInt(arr[0], 10);
    const max = parseInt(arr[1], 10);
    if (Number.isNaN(min) || Number.isNaN(max)) {
        console.log('ERROR INVALID INPUTS, PLEAS ENTER NUMBERS !!!');
    } else {
        for (let i = min; i <= max; i++) {
            if (isPowerOfTwo(i)) console.log(i);
        }
    }
    rl.close();
});
