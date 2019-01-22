function limitNumber() {
    return Math.floor(Math.random() * 50) + 50;
}

function fibonacci(greaterNumber) {
    const fibonacciArray = [0];
    let currentIndex = 0;
    let nextFibonacciNumber = 1;
    while (nextFibonacciNumber <= greaterNumber) {
        fibonacciArray.push(nextFibonacciNumber);
        nextFibonacciNumber += fibonacciArray[currentIndex];
        currentIndex++;
    }
    return fibonacciArray;
}
console.log(fibonacci(limitNumber()));

module.exports = { fibonacci };
