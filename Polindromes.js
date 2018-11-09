const readline = require('readline');

const enterDigit = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPalindrom(str) {
    return str === str.split('').reverse().join('');
}

enterDigit.question('Enter the digit in available diapason, from 500 to 1000: ', (digit) => {
    enterDigit.close();
    if (digit >= 500 && digit <= 1000){
        if (checkPalindrom(digit)){
            console.log("The digit " + digit + " is palindrome");
        } else {
            console.log("The digit " + digit + " is not palindrome");
        }

    } else {
        console.log("Wrong input!")
    }
});


