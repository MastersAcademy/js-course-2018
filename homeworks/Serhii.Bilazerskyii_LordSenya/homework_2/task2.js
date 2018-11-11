const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function palindrome(min, max) {
    if (parseInt(min, 10) === Number(min) && parseInt(max, 10) === Number(max) &&
        parseInt(min, 10) <= parseInt(max, 10)) {
        for (let i = parseInt(min, 10); i <= parseInt(max, 10); i++) {
            if (i.toString().split('').reverse().join('') === i.toString()) {
                console.log(i);
            }
        }
    } else {
        console.log('Please enter a valid numbers');
    }
}

rl.question('Please enter the minimal number: ', (min) => {
    rl.question('Please enter the maximum number: ', (max) => {
        palindrome(min, max);
        rl.close();
    });
});