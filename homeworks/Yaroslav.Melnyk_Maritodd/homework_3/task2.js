const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function func(i) {
    if (i === 1) {
        return true;
    }
    if (i <= 1) {
        return false;
    }
    return func(i / 2);
}

rl.question('Enter numbers from 10 to 1000: ', (num) => {
    for (let i = 1; i <= num; i++) {
        if (func(i) === true) {
            console.log(i);
        }
    }
    rl.close();
});
