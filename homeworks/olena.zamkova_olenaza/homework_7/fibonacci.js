const { getRandomNumber } = require('./randomizer');

function getFibonacci(max) {
    const fibonacciArr = [0, 1];

    let key = 2;
    while (fibonacciArr[key - 1] + fibonacciArr[key - 2] < max) {
        fibonacciArr.push(fibonacciArr[key - 1] + fibonacciArr[key - 2]);
        key++;
    }
    return fibonacciArr;
}

function getRandomFibonacci() {
    return getFibonacci(getRandomNumber());
}

module.exports = { getRandomFibonacci };
