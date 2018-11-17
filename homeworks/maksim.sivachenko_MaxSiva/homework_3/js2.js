
const myArray = [];

function getMyArray(i, minN, maxN) {
    const result = 2 ** i;

    if (result >= minN && result <= maxN) {
        myArray.push(result);
    }

    if (result <= maxN) {
        getMyArray(i + 1, minN, maxN);
    }

    return myArray;
}

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Specify minimum value: ', (answer) => {
    rl.question('Specify maximum value: ', (answer2) => {
        const minN = +answer;
        const maxN = +answer2;
        if (Number.isNaN(minN) || Number.isNaN(maxN)) {
            console.log('The value you were entered is not correct. Use integers');
        } else {
            console.log(getMyArray(0, minN, maxN));
        }
        rl.close();
    });
});
