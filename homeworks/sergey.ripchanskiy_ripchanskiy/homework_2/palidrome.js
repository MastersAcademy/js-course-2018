const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Indicate min number: ', (answer) => {
    rl.question('Indicate max number: ', (answer2) => {
        for (let i = answer; i <= answer2; i++) {
            const checkPalindrome = i.toString().split('').reverse().join('');
            const checkNumber = i.toString();
            if (checkNumber === checkPalindrome) {
                console.log(`${checkNumber} is a Palindrome`);
            }
        }
        rl.close();
    });
});
