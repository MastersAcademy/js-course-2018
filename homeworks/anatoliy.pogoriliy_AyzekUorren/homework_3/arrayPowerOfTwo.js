function isPowerOfTwo(number) {
    return number > 2 ? isPowerOfTwo(number / 2) : number === 2;
}

function getArrayPowerOfTwo(start, end) {
    const result = [];
    for (let currentNumber = start; currentNumber < end; currentNumber++) {
        if (isPowerOfTwo(currentNumber)) {
            result.push(currentNumber);
        }
    }
    return result;
}

module.exports = getArrayPowerOfTwo;
