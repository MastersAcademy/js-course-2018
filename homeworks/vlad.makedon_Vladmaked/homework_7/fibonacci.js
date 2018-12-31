function getRandomNumber(startOfRange, endOfRange) {
    return (Math.floor(Math.random() * (endOfRange - startOfRange) + startOfRange));
}

function getFibonacciNumbers(rand = 55) {
    const fiboArr = [0, 1];
    for (let i = 2; fiboArr[i - 1] + fiboArr[i - 2] <= rand; i++) {
        fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
    }
    return fiboArr;
}

module.exports = { getFibonacciNumbers, getRandomNumber };
