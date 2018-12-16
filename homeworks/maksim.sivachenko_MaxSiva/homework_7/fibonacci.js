
function createFibonacciArray(max) {
    const fibArray = [0, 1];
    for (let i = 1; i <= max; i = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]) {
        fibArray.push(i);
    }
    return fibArray;
}

module.exports = createFibonacciArray;
