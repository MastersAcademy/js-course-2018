function getValue(n, Timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(n);
            resolve(n);
        },
        Timeout);
    });
}

async function logNumbers(n) {
    let myValue = await getValue(n + 10, 1000);
    myValue = await getValue(myValue * 3, 2000);
    await getValue(myValue - 20, 3000);
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
