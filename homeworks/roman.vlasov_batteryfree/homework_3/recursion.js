
function deDegree(a) {
    if (a === 2) {
        return true;
    }
    if (a % 2 === 0) {
        return deDegree(a / 2);
    }
    return false;
}
function degreeTow(a, b) {
    for (let i = a; i <= b; i++) {
        if (deDegree(i)) {
            console.log(`Degree number 2: ${i}`);
        }
    }
}
const readline = require('readline');

const readConsole = readline.createInterface(process.stdin, process.stdout);
function closeConsole() {
    readConsole.close();
}
readConsole.question('Enter the number #1(>=10):', (answer) => {
    const num1 = +answer;
    if (typeof (num1) === 'number' && num1 >= 10) {
        readConsole.question('Enter the number #2(<number #1):', (answer1) => {
            const num2 = +answer1;
            if (typeof (num2) === 'number' && num1 <= num2) {
                degreeTow(num1, num2);
            } else {
                console.log('***Invalid data entered***');
            }
            closeConsole();
        });
    } else {
        console.log('***Invalid data entered***');
        closeConsole();
    }
});
