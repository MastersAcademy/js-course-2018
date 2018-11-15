const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What number to square?', (answer) => {
    const number = +answer;

    function squareNunber() {
        const squareNum = number * number;
        return squareNum;
    }

    console.log(squareNunber(number));
    rl.close();
});
