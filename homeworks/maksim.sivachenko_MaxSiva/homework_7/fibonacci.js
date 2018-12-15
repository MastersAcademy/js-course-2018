
function createFibonacciArray(max) {
    const fibArray = [0, 1];
    let sum = 0;
    for (let i = 3; i <= max; i = sum + fibArray[fibArray.length - 2]) {
        sum = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
        fibArray.push(sum);
    }
    return fibArray;
}

module.exports = createFibonacciArray;
