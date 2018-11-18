// task 1.1

const numb1 = 5;
const numb2 = 15;
const numb3 = 53;
const resNumb1 = numb1 * numb1;
const resNumb2 = numb2 * numb2;
const resNumb3 = numb3 * numb3;
const resArr = [resNumb1, resNumb2, resNumb3];
console.log(`Task 1.1: ${resArr}`);

// task 1.2

function arrCreate(minValue, maxValue, stepValue) {
    const resValue = [];
    for (let i = minValue; i <= maxValue; i += stepValue) {
        resValue.push(i);
    }
    return resValue;
}

function resCreate(array) {
    console.log(`Task 1.2: ${array}`);
}
resCreate(arrCreate(0, 50, 5));
resCreate(arrCreate(0, 32, 4));

// task 1.3

function sqr(array) {
    let arrValue = array;
    for (let i = 0; i < arrValue.length; i++) {
        arrValue = array.map(() => array[i] * array[i]);
    }
    return arrValue;
}

function resSqr(arrValue) {
    console.log(`Task 1.3: ${arrValue}`);
}

resSqr(sqr(arrCreate(0, 32, 4)));

// task 1.4

function arraySum(array) {
    let sumval = 0;
    for (let i = 0; i < array.length; i++) {
        sumval = array.reduce((sum, current) => sum + current);
    }
    console.log(`Task 1.4: ${sumval}`);
}

arraySum(sqr(arrCreate(0, 32, 4)));

// task 1.5

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the minimum value: ', (minValue) => {
    rl.question('Enter the maximum value: ', (maxValue) => {
        rl.close();
        const arrValue = [];
        const resValue = [];
        for (let i = minValue; i < maxValue; i++) {
            arrValue.push(i);
        }
        for (let i = 0; i < arrValue.length; i++) {
            const check = (x) => {
                if (x === 1) {
                    return true;
                }
                if (x > 1 && x < 2) {
                    return false;
                }
                return check(x / 2);
            };
            const x = arrValue[i];
            if (check(x) === 1) {
                resValue.push(x);
            }
        }
        console.log(`Task 1.5: ${resValue}`);
    });
});
