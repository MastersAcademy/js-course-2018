function createFibonacciSequence(maxValue) {
    const seq = [0, 1];
    for (let i = 1; i < maxValue; i = seq[seq.length - 1] + seq[seq.length - 2]) {
        seq.push(i);
    }
    return seq;
}

console.log(createFibonacciSequence(Math.floor(Math.random() * 51 + 50)));

module.exports = createFibonacciSequence;
