// Checks if a number is a palindrome
function isPalindrome(number) {
    let numberLength = number.length;
    let mirrowNumber = '';
    while (numberLength > 0) {
        mirrowNumber += number.substring(numberLength - 1, numberLength);
        numberLength--;
    }
    return number === mirrowNumber;
}

// Displays in the terminal mirror numbers
function mirrowNumbers(startNumber, endNumber) {
    for (let number = startNumber; number <= endNumber; number++) {
        if (isPalindrome(number.toString())) {
            console.log(number);
        }
    }
}

// Input data processing and its validation
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let startNumber;
let endNumber;
console.log('Insert the start number: ');

rl.on('line', (line) => {
    const input = +line;
    if (!Number.isNaN(input) && Number.isInteger(input) && input > 0) {
        if (startNumber === undefined) {
            startNumber = input;
            console.log('Insert the end number: ');
        } else if (input <= startNumber) {
            console.log('Must be greater than start number');
        } else {
            endNumber = input;
            mirrowNumbers(startNumber, endNumber);
            rl.close();
        }
    } else {
        console.log('Must be a positive integer, try again');
    }
});
