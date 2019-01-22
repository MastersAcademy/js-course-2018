const readline = require('readline');

const inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
inputData.question('Enter the number to square it: ', (number) => {
    inputData.question('Enter the max value of array to create it: ', (maxValue) => {
        inputData.question('Enter the step of array to create it: ', (step) => {
            inputData.close();
            const pow = x => x * x;
            console.log(pow(number));

            const intStep = parseInt(step, 10);
            const arr = [];
            const fillArray = (size, stepSize) => {
                for (let i = 0; i <= size; i += stepSize) {
                    arr.push(i);
                }
                return arr;
            };
            console.log(fillArray(maxValue, intStep));

            const powArray = array => array.map(element => element * element);
            console.log(powArray(arr));
            const arrForSum = powArray(arr);

            const sumArray = array => array.reduce((element, current) => element + current);
            console.log(sumArray(arrForSum));
        });
    });
});
