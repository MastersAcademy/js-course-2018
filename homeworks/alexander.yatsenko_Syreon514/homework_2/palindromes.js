let startNumber = 0;
let finishNumber = 0;
let palindromes = [];

function isPalindrome(number) {
    const numberToString = String(number);
    for (let i = 0; i < numberToString.length / 2; i++) {
        if (numberToString[i] !== numberToString[numberToString.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function findPalindromes(start, finish) {
    for (let i = start; i <= finish; i++) {
        if (isPalindrome(i) === true) {
            palindromes += `${i} `;
        }
    }
    return palindromes;
}

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Specify starting point: ', (firstAnswer) => {
    rl.question('Specify ending point: ', (secondAnswer) => {
        startNumber = parseInt(firstAnswer, 10);
        finishNumber = parseInt(secondAnswer, 10);
        if (Number.isNaN(startNumber) || Number.isNaN(finishNumber)) {
            console.log('The value you were entered is not correct. Use integers');
        } else {
            console.log(`Palindromes: ${findPalindromes(startNumber, finishNumber)}`);
        }
        rl.close();
    });
});
