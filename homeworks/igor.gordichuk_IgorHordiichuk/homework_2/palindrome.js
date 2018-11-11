// palindromes searching
function palindromeFinding(num1, num2) {
    const palindromes = [];
    for (let i = num1; i <= num2; i++) {
        if (i.toString().split('').reverse().join('') === i.toString()) {
            palindromes.push(i);
        }
    }
    console.log(`Your palindromes are: ${palindromes.toString()}`);
}

// entering numbers by user
function enterNums() {
    /* eslint-disable global-require */
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter first number: ', (firstNum) => {
        rl.question('Enter last number: ', (lastNum) => {
            let num1 = +firstNum;
            let num2 = +lastNum;
            if (num1 && num2) {
                if (num1 > num2) {
                    const change = num1;
                    num1 = num2;
                    num2 = change;
                }palindromeFinding(num1, num2);
            } else {
                console.log('Try to read something about the numbers');
            }
            rl.close();
        });
    });
}enterNums();
