function square(i) {
    if (i % 2 === 0) return square(i / 2);
    return i === 1;
}

function isPowTwo(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        if (square(i)) {
            console.log(i);
        }
    }
}

const checkNum = function check(n1) {
    return !Number.isNaN(n1) && n1 >= 0;
};

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Enter first number of range: ', (first) => {
    r1.question('Enter last number of range: ', (last) => {
        const n1 = parseInt(first, 10);
        const n2 = parseInt(last, 10);
        if (checkNum(n1) && checkNum(n2)) {
            isPowTwo(n1, n2);
            r1.close();
        } else {
            console.log('Oops! You don\'t input a number!');
            r1.close();
        }
    });
});
