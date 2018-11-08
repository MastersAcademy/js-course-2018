function palindrome(from, to) {
    if (parseInt(from) === Number(from) && parseInt(to) === Number(to) && parseInt(from) <= parseInt(to)) {
        for (let i = parseInt(from); i <= parseInt(to); i++) {
            if (i.toString().split('').reverse().join('') === i.toString()) {
                console.log(i);
            }
        }
    } else {
        console.log('Please enter a valid numbers');
    }
    return 0;
}


const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('Please enter the first number: ', (from) => {
    rl.question('Please enter the second number: ', (to) => {
        console.log(palindrome(from, to));
        rl.close();
    });
});