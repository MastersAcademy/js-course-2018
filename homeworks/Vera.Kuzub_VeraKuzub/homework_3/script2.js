function checkNumber(num) {
    if (num === 1) {
        return true;
    } if (num > 1 && num < 2) {
        return false;
    } return checkNumber(num / 2);
}

function findNaturalNumbers(firstNum, LastNum) {
    const arr = [];
    let number = firstNum;
    while (number <= LastNum) {
        if (checkNumber(number) === true) {
            arr.push(number);
            number += 1;
        } else number += 1;
    }
    return arr;
}

function getArrOfNaturalNumber(str) {
    const arr = str.split(' ');
    if (arr.length !== 2) console.log('Incorrect input');
    else if (Number.isNaN(Number(arr[0])) || Number.isNaN(Number(arr[1]))) console.log('Please enter numbers');
    else if (Number(arr[0]) >= Number(arr[1])) console.log('Error: min is greater than max');
    return findNaturalNumbers(Number(arr[0]), Number(arr[1]));
}

const res = findNaturalNumbers(10, 600);
console.log('findNaturalNumbers(10, 600);', res);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Сhoose a range. Enter a min intenger and a max intenger.', (answer) => {
    console.log('ArrOfNaturalNumber :', getArrOfNaturalNumber(answer));
    rl.close();
});
