const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the minimum value ', (min) => {
    rl.question('Enter the maximum value ', (max) => {
        const sqrt = (n) => {
            if (n === 1) {
                return true;
            } if (n < 1) {
                return false;
            } return sqrt(n / 2);
        };
        for (let i = min; i <= max; i++) {
            if (sqrt(i) === true) { console.log(i); }
        }
        rl.close();
    });
});
