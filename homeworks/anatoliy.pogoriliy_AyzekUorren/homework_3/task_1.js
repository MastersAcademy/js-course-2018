function square(number) {
    return number ** 2;
}

function createArrayNumbers(lastNumber, step) {
    const result = [];
    for (let currentNumber = 0; currentNumber <= lastNumber; currentNumber += step) {
        result.push(currentNumber);
    }
    return result;
}

function getArraySquare(array) {
    return array.map(number => square(number));
}

function getSumOfArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = {
    square, createArrayNumbers, getArraySquare, getSumOfArray,
};
