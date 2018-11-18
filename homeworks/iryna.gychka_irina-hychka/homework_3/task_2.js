// Checks if the number belongs to power of two
const isEqualPowerOfTwo = (n) => {
    if (n === 2) {
        return true;
    }
    const m = n / 2;
    if (Number.isInteger(m) === false) {
        return false;
    }
    return isEqualPowerOfTwo(m);
};

// Outputs the numbers equal power of two
function powNumsFunc(a, b) {
    const powNums = [];
    for (let num = a; num <= b; num++) {
        if (isEqualPowerOfTwo(num)) {
            powNums[powNums.length] = num;
        }
    }
    return powNums.join(' ');
}

// Input data processing and its validation
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let startNumber;
let endNumber;
console.log('Insert the start number: ');
rl.on('line', (line) => {
    const input = +line;
    if (!Number.isNaN(input) && Number.isInteger(input) && input >= 2) {
        if (startNumber === undefined) {
            startNumber = input;
            console.log('Insert the end number: ');
        } else if (input <= startNumber) {
            console.log('Must be greater than start number');
        } else {
            endNumber = input;
            console.log('In this range of numbers, such numbers that are powers of two are: ');
            console.log(powNumsFunc(startNumber, endNumber));
            rl.close();
        }
    } else {
        console.log('Must be a positive integer upper two, try again');
    }
});
