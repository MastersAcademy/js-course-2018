const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const checkNumber = (answer) => {
    if (!Number.isInteger(answer) || answer <= 0) {
        // \x1b[1;31m - for color output in console
        console.log('\x1b[1;31mWrong input! Must be positive integer numbers.\x1b[0m');
        process.exit(1);
    }
};

const validationAnswers = (answer1, answer2) => {
    checkNumber(answer1);
    checkNumber(answer2);
    if (answer1 > answer2) {
        console.log('\x1b[1;31mThe minimum number must be less than the maximum.\x1b[0m');
        process.exit(1);
    }
};

const isDegree2 = (number) => {
    if (number === 1) {
        return true;
    }
    if (number < 2) {
        return false;
    }
    return isDegree2(number / 2);
};

const findNumbers = (min, max) => {
    for (let i = min; i <= max; i++) {
        if (isDegree2(i)) {
            console.log(i);
        }
    }
};

rl.question('Please enter the minimum number: ', (answer1) => {
    rl.question('Please enter the maximum number: ', (answer2) => {
        validationAnswers(+answer1, +answer2);
        findNumbers(+answer1, +answer2);
        rl.close();
    });
});
