// task 1.1

let numb1 = 5;
let numb2 = 15;
let numb3 = 53;
numb1 **= 2;
numb2 **= 2;
numb3 **= 2;
const resArr = [numb1, numb2, numb3];
console.log(`Task 1.1: ${resArr}`);

// task 1.2

function arrCreate(minValue, maxValue, stepValue) {
    let i = minValue;
    const resValue = [];
    for (i; i <= maxValue; i += stepValue) {
        resValue.push(i);
    }
    // console.log(`Task 1.2: ${resValue}`);
    return resValue;
}

function resCreate(array) {
    console.log(`Task 1.2: ${array}`);
}
resCreate(arrCreate(0, 50, 5));
resCreate(arrCreate(0, 32, 4));

// task 1.3

function sqr(array) {
    const arrValue = array;
    for (let i = 0; i < arrValue.length; i++) {
        arrValue[i] **= 2;
    }
    return arrValue;
}

function resSqr(arrValue) {
    console.log(`Task 1.3: ${arrValue}`);
}

resSqr(sqr(arrCreate(0, 32, 4)));

// task 1.4

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i], 10);
    }
    console.log(`Task 1.4: ${sum}`);
}

arraySum(sqr(arrCreate(0, 32, 4)));

// task 1.5

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ведите минимальное значение: ', (minValue) => {
    rl.question('Ведите максимальное значение: ', (maxValue) => {
        rl.close();
        const arrValue = [];
        const resValue = [];
        for (let i = minValue; i < maxValue; i++) {
            arrValue.push(i);
        }
        for (let i = 0; i < arrValue.length; i++) {
            const check = (x) => {
                if (x === 1) {
                    return 1;
                }
                if (x > 1 && x < 2) {
                    return 0;
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
