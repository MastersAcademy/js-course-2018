const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function func(x) {
    if (x === 1) {
        return true;
    }
    if (x === 0) {
        return false;
    }
    return func(x / 2);
}

rl.question('Enter numbers from 10 to 1000: ', (num) => {
    for (let x = 1; x <= num; x++) {
        if (func(x) === true) {
            console.log(x);
        }
    }
    rl.close();
});
