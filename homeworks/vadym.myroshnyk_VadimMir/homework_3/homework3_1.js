// homework 1.1
const numberOne = 5;
const numberTwo = 15;
const numberThree = 53;

function squareNunber(num) {
    return num * num;
}
console.log(squareNunber(numberOne));
console.log(squareNunber(numberTwo));
console.log(squareNunber(numberThree));


// homework 1.2
function arrNum(valueMax, stepElements) {
    const arr = [];
    for (let i = 0; i <= valueMax; i += stepElements) {
        arr.push(i);
    }
    console.log(arr);
}
arrNum(50, 5);
arrNum(32, 4);

// homework 1.3
const arr = [0, 4, 8, 12, 16, 20, 24, 28, 32];

function squareArr(num) {
    return num * num;
}
const empyArr = arr.map(squareArr);
console.log(empyArr);


// homework 1.4
const arrSum = [0, 16, 64, 144, 256, 400, 576, 784, 1024];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sum() {
    console.log(arrSum.reduce(reducer));
}
sum();
