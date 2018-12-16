
function fibonacciSequence() {
    const limitRandomValue = Math.floor(Math.random() * 51) + 50;
    const array = [0, 1];

    while ((array[array.length - 1] + array[array.length - 2]) < limitRandomValue) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return array;
}

module.exports = fibonacciSequence;
