function getFibonacciNumbers(rand) {
    const arrayOfFibonacciNumbers = [0, 1];
    for (let i = 2; arrayOfFibonacciNumbers[i - 1] + arrayOfFibonacciNumbers[i - 2] < rand; i++) {
        const currentNumber = arrayOfFibonacciNumbers[i - 1] + arrayOfFibonacciNumbers[i - 2];
        arrayOfFibonacciNumbers.push(currentNumber);
    }
    return arrayOfFibonacciNumbers;
}

module.exports = getFibonacciNumbers;
