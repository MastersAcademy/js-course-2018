const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 rl.question('Please select a numbers range (ex: 600, 1000).', (answer) => {
    const answerArray = answer.split(',');
    const firstNumber = Number(answerArray[0]);
    const secondNumber = Number(answerArray[1]);
     if (answerArray.length > 2 || Number.isNaN(firstNumber) || Number.isNaN(secondNumber) || firstNumber >= secondNumber) {
        console.log('Wrong data!');
    } else {
        for (let i = firstNumber; i < secondNumber; i++) {
            if (thePalindrome(i.toString())) {
                console.log(i);
            }
        }
    }
     rl.close();
});
 function thePalindrome(str) {
    return str === str.split('').reverse().join('');
}
