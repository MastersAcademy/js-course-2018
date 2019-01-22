const MIN_RANDOM = 50;
const MAX_RANDOM = 100;

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
}

function createFibonacciSequence(limit) {
    const sequence = [0, 1];
    for (let i = 1; i <= limit; i += sequence[sequence.length - 2]) {
        sequence.push(i);
    }
    return sequence;
}

function getFibonacciSequence() {
    return createFibonacciSequence(getRandomNumber(MIN_RANDOM, MAX_RANDOM));
}

module.exports = getFibonacciSequence;
