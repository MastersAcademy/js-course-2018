const readline = require('readline-sync');

const minNumber = readline.question('Indicate min number: ');
const maxNumber = readline.question('Indicate max number: ');

function diapason(value1, value2) {
    for (let i = value1; i <= value2; i++) {
        const checkPalindrome = i.toString().split('').reverse().join('');
        const checkNumber = i.toString();
        if (checkNumber === checkPalindrome) {
            console.log(`${checkNumber} is a Palindrome`);
        }
    }
}
diapason(minNumber, maxNumber);
