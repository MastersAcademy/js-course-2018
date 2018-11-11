const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// entering numbers by user
rl.question('Enter first number: ', (firstNum) => {
    rl.question('Enter last number: ', (lastNum) => {
        let num1 = +firstNum;
        let num2 = +lastNum;
        if (num1 && num2) {
            // changing variables if first is greater than last
            if (num1 > num2) {
                const change = num1;
                num1 = num2;
                num2 = change;
            }
            // palindromes searching
            const palindromes = [];
            for (let i = num1; i <= num2; i++) {
                if (i.toString().split('').reverse().join('') === i.toString()) {
                    palindromes.push(i);
                }
            }
            console.log(`Your palindromes are: ${palindromes.toString()}`);
        } else {
            console.log('Try to read something about the numbers');
        }
        rl.close();
    });
});
