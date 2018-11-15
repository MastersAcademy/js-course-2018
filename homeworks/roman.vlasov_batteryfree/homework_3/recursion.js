
function dedegree(a) {
    if (a === 2) {
        return true;
    }
    if (a % 2 === 0) {
        return dedegree(a / 2);
    }
    return false;
}
function degreetow(a, b) {
    for (let i = a; i <= b; i++) {
        if (dedegree(i)) {
            console.log(`Degree number 2: ${i}`);
        }
    }
}
const readline = require('readline');

const readconsole = readline.createInterface(process.stdin, process.stdout);
function closeconsole() {
    readconsole.close();
}
readconsole.question('Enter the number #1(>=10):', (answer) => {
    const num1 = +answer;
    if (typeof (num1) === 'number' && num1 >= 10) {
        readconsole.question('Enter the number #2(<number #1):', (answer1) => {
            const num2 = +answer1;
            if (typeof (num2) === 'number' && num1 <= num2) {
                degreetow(num1, num2);
            } else {
                console.log('***Invalid data entered***');
            }
            closeconsole();
        });
    } else {
        console.log('***Invalid data entered***');
        closeconsole();
    }
});
