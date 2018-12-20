const { randomNumber } = require('./randomNumber');

function fibonacci() {
    const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const limit = randomNumber(50, 100);

    return fibonacciNumbers.filter(number => limit >= number);
}

module.exports = { fibonacci };
