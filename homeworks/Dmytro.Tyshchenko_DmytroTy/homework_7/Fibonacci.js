function fibonacciNumbers(max) {
    if (typeof max != 'number') throw new Error('Must be given a number (positive)!');

    function createFibonacci(fibonacciArray, preprevious, previous) {
        const next = previous + preprevious;
        if (next <= max) {
            fibonacciArray.push(next);
            return createFibonacci(fibonacciArray, previous, next);
        }
        return fibonacciArray;
    }

    if (max >= 0) {
        return (max < 1) ? [0] : createFibonacci([0, 1], 0, 1);
    }
    throw new Error('The number should be at least 0!');
}

function randomFrom50to100() {
    return 50 + 50 * Math.random();
}

console.log(fibonacciNumbers(randomFrom50to100()));

module.exports = { fibonacciNumbers, randomFrom50to100 };
