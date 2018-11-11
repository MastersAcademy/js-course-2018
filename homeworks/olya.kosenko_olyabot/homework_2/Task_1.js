function pyramid(n1) {
    console.log(`Pyramid with ${n1} rows:`);
    const str1 = '#';
    const str2 = ' ';
    for (let i = 0; i < n1; i++) {
        console.log(str2.repeat(n1 - i) + str1.repeat(i * 2 + 4));
    }
}

function check(n1) {
    return (!Number.isNaN(n1) && n1 > 0) ? 1 : 0;
}

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('How many rows must have Pyramid? ', (n) => {
    const n1 = parseInt(n, 10);
    if (check(n1)) {
        pyramid(n1);
        r1.close();
    } else {
        r1.close();
        console.log('Oops! You don\'t input a quantity of rows!');
    }
});
