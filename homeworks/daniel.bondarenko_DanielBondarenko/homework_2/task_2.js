const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function palindrome(from, to) {
    if (parseInt(from, 10) === Number(from) && parseInt(to, 10) === Number(to)
        && parseInt(from, 10) <= parseInt(to, 10)) {
        for (let i = parseInt(from, 10); i <= parseInt(to, 10); i++) {
            if (i.toString().split('').reverse().join('') === i.toString()) {
                console.log(i);
            }
        }
    } else {
        console.log('Please enter a valid numbers');
    }
}

rl.question('Please enter the first number: ', (from) => {
    rl.question('Please enter the second number: ', (to) => {
        palindrome(from, to);
        rl.close();
    });
});
