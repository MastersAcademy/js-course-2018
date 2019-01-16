function getRandomInteger() {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}

function fibonacci(lastNum) {
    const result = [0, 1];
    for (let i = 1; i < lastNum; i += result[result.length - 2]) {
        result.push(i);
    }
    return result;
}

module.exports = { fibonacci, getRandomInteger };
