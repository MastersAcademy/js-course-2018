const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please give me max value of power (range takes a start from 10): ', (inputValue) => {
    console.log(`Thank you for your valuable feedback: ${inputValue}`);

    function isPower(num) {
        if (num > 1) {
            return isPower(num / 2);
        }
        if (num === 1) {
            return true;
        }
        return false;
    }

    isPower(12); // Don't forger del checker

    function logPowOfTwoInRange(maxValue) {
        const ourPowerNums = [];

        for (let i = 10; i <= maxValue; i++) {
            if (isPower(i)) {
                ourPowerNums.push(i);
            }
        }
        console.log(ourPowerNums);
    }
    logPowOfTwoInRange(inputValue);

    rl.close();
});

// Code how test is num is power of two

// if (num === 1) {
//     // console.log('true');
// } else {
//     console.log('False');
//     return false;
// }
