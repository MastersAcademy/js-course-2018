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
    return arr;
}
arrNum(50, 5);
arrNum(32, 4);

// homework 1.3
const empyArr = arrNum(32, 4).map(squareNunber);
console.log(empyArr);


// homework 1.4
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sum() {
    console.log(empyArr.reduce(reducer));
}
sum();
