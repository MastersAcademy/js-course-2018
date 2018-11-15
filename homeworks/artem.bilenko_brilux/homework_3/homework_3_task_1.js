const readline = require('readline');

const inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

inputData.question('Enter the number to square it: ', (x) => {
    inputData.question('Enter the max value of array to create it: ', (maxValue) => {
        inputData.question('Enter the step of array to create it: ', (step) => {
            inputData.close();

            const pow = () => x * x;
            console.log(pow());

            let arr = [];

            const fillArray = () => {
                for (let i = 0; i < maxValue / step + 1; i++) {
                    arr.push(i * step);
                }
                return arr;
            };

            console.log(fillArray(maxValue, step));

            const powArray = () => {
                arr = arr.map(element => element * element);
                return arr;
            };
            console.log(powArray());

            const sumArray = () => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                return sum;
            };
            console.log(sumArray());
        });
    });
});
