function randomEndValue() {
    return Math.floor(Math.random() * 51 + 50);
}
function fibonacci() {
    const fibonacciArray = [0, 1];
    const endOfArray = randomEndValue();
    for (let i = 0; ;) {
        i = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        if (i < endOfArray) {
            fibonacciArray.push(i);
        } else { break; }
    }
    return fibonacciArray;
}
console.log(fibonacci());
module.exports = { fibonacci, randomEndValue };
