function checkPalindrom(expression) {
    return expression === expression.split('').reverse().join('');
}

const readline = require('readline');
const enterExpression = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

enterExpression.question('Enter the digit in available diapason from 500 to 1000: ', (expression) => {
    enterExpression.close();
    if (expression >= 500 && expression <= 1000){
        if (checkPalindrom(expression)){
            console.log("The expression is palindrome: " + expression);
        }
        else
            console.log("The expression is not palindrome")
    } else {
        console.log("Wrong input!")
    }
});

