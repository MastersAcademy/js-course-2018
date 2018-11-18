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

const reverse = str => str.split('').reverse().join('');

const findMirrorNumbers = (start, end) => {
    let result = '';
    for (let i = start; i <= end; i++) {
        if (i.toString() === reverse(i.toString())) {
            // this is necessary to display all numbers in a line instead of a new line
            result += `${i}, `;
        }
    }
    result = result.slice(0, -2);
    console.log(result);
};

// I know it's bad to use nested callbacks, but for now let's leave it.
rl.question('Please enter the minimum number: ', (answer1) => {
    rl.question('Please enter the maximum number: ', (answer2) => {
        validationAnswers(+answer1, +answer2);
        findMirrorNumbers(+answer1, +answer2);
        rl.close();
    });
});
