const readline = require('readline');

const inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inputData.question('Введите минимальное значение: ', (min) => {
    inputData.close();
    let a = 1;
    let b;
    function rec(n) {
        if (a > n) {
            return false;
        }
        if (a === n) {
            return true;
        }
        a *= 2;
        return rec(n);
    }

    for (let i = min; i <= 600; i++) {
        b = rec(i);
        if (b === true) {
            console.log(i);
        }
    }
});
