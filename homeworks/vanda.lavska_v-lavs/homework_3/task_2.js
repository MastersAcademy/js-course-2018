const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function recursion(n) {
    if (n === 1) {
        return 1;
    }
    if (n > 1 && n < 2) {
        return n;
    }
    return recursion(n / 2);
}

rl.question('Enter min number ', (min) => {
    rl.question('Enter max number ', (max) => {
        const myArray = [];
        for (let i = min; i <= max; i++) {
            if (recursion(i) === 1) {
                myArray.push(i);
                console.log(myArray);
            }
        }
        rl.close();
    });
});
