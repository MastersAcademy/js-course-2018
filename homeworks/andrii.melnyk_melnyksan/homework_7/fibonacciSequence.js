function randomLimitValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createFibonacciSequence(limit) {
    const array = [0, 1];

    while ((array[array.length - 1] + array[array.length - 2]) < limit) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return array;
}

module.exports.randomValue = randomLimitValue;

module.exports.fibonacciSequence = createFibonacciSequence;
