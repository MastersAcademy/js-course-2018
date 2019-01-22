function getValue(n, Timeout, callback) {
    setTimeout(
        () => {
            callback((n));
        }, Timeout,
    );
}

function logNumbers(n) {
    getValue(n + 10, 1000, (result) => {
        console.log(result);
        getValue(result * 3, 2000, () => {
            console.log(result);
            getValue(result - 20, 3000, () => {
                console.log(result);
            });
        });
    });
}

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Specify value: ', (answer) => {
    if (Number.isNaN(+answer)) {
        console.log('The value you were entered is not correct. Use integers');
    } else {
        logNumbers(+answer);
    }
    rl.close();
});
