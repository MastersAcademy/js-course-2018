function isPowerOfTwo(integer) {
    if (integer === 1) {
        return true;
    }
    if (integer < 1) {
        return false;
    }
    return isPowerOfTwo(integer / 2);
}

function findPowerOfTwo(start, finish) {
    const powerOfTwo = [];
    for (let i = start; i <= finish; i++) {
        if (isPowerOfTwo(i) === true) {
            powerOfTwo.push(i);
        }
    }
    return powerOfTwo;
}

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Specify starting point: ', (firstAnswer) => {
    rl.question('Specify ending point: ', (secondAnswer) => {
        const startNumber = parseInt(firstAnswer, 10);
        const finishNumber = parseInt(secondAnswer, 10);
        if (Number.isNaN(startNumber) || Number.isNaN(finishNumber)) {
            console.log('The value you were entered is not correct. Use integers');
        } else {
            console.log(`Power of two: ${findPowerOfTwo(startNumber, finishNumber)}`);
        }
        rl.close();
    });
});
