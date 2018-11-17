const readline = require('readline');

const inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inputData.question('Enter the min value of diapason: ', (minValue) => {
    inputData.question('Enter the max value of diapason: ', (maxValue) => {
        inputData.close();
        const arr = [];
        for (let i = minValue; i < maxValue; i++) {
            arr.push(i);
        }
        const check = (x) => {
            if (x === 1) {
                return true;
            }
            if (x >= 2) {
                return check(x / 2);
            }
            return false;
        };
        for (let i = 0; i < arr.length; i++) {
            const x = arr[i];
            if (check(x) === true) {
                console.log(x);
            }
        }
    });
});
