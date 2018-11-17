function square(i) {
    if (i === 0) return 1;
    if (i === 2) return true;
    if (i % 2 === 0) return square(i / 2);
    return false;
}

function isPowTwo(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        if (square(i)) {
            console.log(i);
        }
    }
}

function check(n1, n2) {
    return ((!Number.isNaN(n1) && n1 >= 0)
    && (!Number.isNaN(n2) && n2 > 0));
}

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Enter first number of range: ', (first) => {
    r1.question('Enter last number of range: ', (last) => {
        const n1 = parseInt(first, 10);
        const n2 = parseInt(last, 10);
        if (check(first, last)) {
            isPowTwo(n1, n2);
            r1.close();
        } else {
            console.log('Oops! You don\'t input a number!');
            r1.close();
        }
    });
});
