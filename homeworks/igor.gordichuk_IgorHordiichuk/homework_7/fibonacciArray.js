function limitNumber() {
    return Math.floor(Math.random() * 50) + 50;
}

function fibonacci(greaterNumber) {
    const fibonacciArray = [0, 1];
    let i = 1;
    while (fibonacciArray[i] < greaterNumber) {
        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i - 1]);
        i++;
    }
    return fibonacciArray.splice(0, i);
}
console.log(fibonacci(limitNumber()));

module.exports = { fibonacci };
