const MIN_RANDOM = 50;
const MAX_RANDOM = 100;

function getRandomFibonacciSequence() {
    const difference = MAX_RANDOM - MIN_RANDOM;
    const maxNumber = Math.trunc(Math.random() * (difference + 1) + MIN_RANDOM);
    const numbers = [0, 1];

    for (let i = 1; i <= maxNumber; i += numbers[numbers.length - 2]) {
        numbers.push(i);
    }
    return numbers;
}

module.exports = getRandomFibonacciSequence;
