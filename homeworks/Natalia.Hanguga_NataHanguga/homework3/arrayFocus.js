const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const arr = [];
let arr1 = [];
let iter = 0;
r1.question('Max element in array: ', (max) => {
    r1.question('Step of array: ', (step) => {
        while (iter < Number(max)) {
            arr.push(iter);
            iter += Number(step);
            console.log(iter);
        }
        console.log(arr);
        arr1 = arr.map(el => el ** 2);
        console.log(arr1);
        const sum = arr1.reduce((a, b) => a + b);
        console.log(sum);
        r1.close();
    });
});
