// 1.1

function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(5));
console.log(squareNumber(15));
console.log(squareNumber(53));

// 1.2

const array = [];

function addNumberToArray(maxValue, stepValue) {
    for (let i = 0; i <= maxValue; i += stepValue) {
        array.push(i);
    }
    return array;
}

console.log(addNumberToArray(32, 4));

// 1.3

function squareArray() {
    const arrayNew = [];
    array.forEach((item) => {
        arrayNew.push(squareNumber(item));
    });
    return arrayNew;
}
console.log(squareArray());

// 1.4

const b = squareArray();

function sumArray() {
    let sum = 0;
    b.forEach((item) => {
        sum += item;
    });
    return sum;
}
console.log(sumArray());
