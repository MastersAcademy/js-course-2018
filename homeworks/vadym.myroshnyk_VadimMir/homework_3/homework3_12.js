const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the maximum value of the array: ', (max) => {
    rl.question('What step between elements: ', (step) => {
        const valueMax = +max;
        const stepElements = +step;

        const arrNum = function arrNum() {
            if (max <= 0) {
                const err = 'Error';
                console.log(err);
            }
            const arr = [];
            for (let i = 0; i <= valueMax; i += stepElements) {
                arr.push(i);
            }
            console.log(arr);
        };

        arrNum(valueMax, stepElements);
        rl.close();
    });
});
