const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const isPowerOfTwo = (number) => {
    if (number === 2 || number === 0) {
        // console.log('number ===2 it is true ');
        return true;
    }
    if (number % 2 !== 0) {
        // console.log(number, '%2=', number % 2, ' false ');
        return false;
    }
    // console.log(number, '%2=', number % 2, ' try again ');
    return isPowerOfTwo(number / 2);
};

rl.question('PLEASE ENTER "MIN-MAX": ', (answer) => {
    const arr = answer.split('-');
    const min = parseInt(arr[0], 10);
    const max = parseInt(arr[1], 10);
    if (Number.isNaN(min) || Number.isNaN(max)) console.log('ERROR INVALID INPUTS, PLEAS ENTER NUMBERS !!!');
    else {
        for (let i = min; i <= max; i++) {
            if (isPowerOfTwo(i)) console.log(i);
        }
    }
    rl.close();
});
