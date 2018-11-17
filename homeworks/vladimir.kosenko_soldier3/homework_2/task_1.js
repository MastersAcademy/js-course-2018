
const str = '#';
const space = ' ';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function writeTree(number) {
    let i = 4;
    let spaces = number - 1;
    let num = number;

    for (;num > 0; num--, i += 2, spaces--) {
        const whiteSpace = space.repeat(spaces);
        const str1 = str.repeat(i);
        const result = whiteSpace + str1;
        console.log(result);
    }
}

function checkImputValue(number) {
    return (!Number.isNaN(number) && number > 0);
}

rl.question('Enter a number greater than zero: ',
    (answer) => {
        const number = parseInt(answer, 10);

        if (checkImputValue(number)) {
            writeTree(number);
        } else {
            console.log('Incorrect data entered');
        }

        rl.close();
    });
