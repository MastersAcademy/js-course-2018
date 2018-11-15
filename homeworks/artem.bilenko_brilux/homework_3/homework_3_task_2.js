const readline = require('readline');

const inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inputData.question('Enter the min value of diapason: ', (minValue) => {
    inputData.question('Enter the max value of diapason: ', (maxValue) => {
        inputData.close();
        const arr = [];
        const result = [];
        for (let i = minValue; i < maxValue; i++) {
            arr.push(i);
        }
        for (let i = 0; i < arr.length; i++) {
            const check = (x) => {
                if (x === 1) {
                    return 1;
                }
                if (x > 1 && x < 2) {
                    return 0;
                }
                return check(x / 2);
            };
            const x = arr[i];
            if (check(x) === 1) {
                result.push(x);
            }
        }
        console.log(result);
    });
});
