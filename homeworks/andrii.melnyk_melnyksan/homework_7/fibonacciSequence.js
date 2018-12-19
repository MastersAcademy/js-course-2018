function randomLimitValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createFibonacciSequence(min, max) {
    const array = [0, 1];
    const limit = randomLimitValue(min, max);

    while ((array[array.length - 1] + array[array.length - 2]) < limit) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    if (array[array.length - 1] < min) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return array;
}

module.exports.randomValue = randomLimitValue;

module.exports.fibonacciSequence = createFibonacciSequence;
