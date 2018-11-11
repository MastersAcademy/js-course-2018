function palnum(i, j) {
    for (let i1 = i; i1 <= j; i1++) {
        if (i1.toString() === i1.toString().split('').reverse().join('')) {
            console.log(i1);
        }
    }
}
const readline = require('readline');

const readconsole = readline.createInterface(process.stdin, process.stdout);
readconsole.question('Enter the number #1(>=500):', (answer) => {
    function closeconsole() {
        readconsole.close();
    }
    const num1 = +answer;
    if (typeof (num1) === 'number' && num1 >= 500) {
        readconsole.question('Enter the number #2(<number #1):', (answer1) => {
            const num2 = +answer1;
            if (typeof (num2) === 'number' && num1 < num2) {
                palnum(num1, num2);
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
