function createFibonacciSequence(maxValue) {
    const seq = [0, 1];
    for (let i = 2; (seq[seq.length - 1] + seq[seq.length - 2]) <= maxValue; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

console.log(createFibonacciSequence(Math.floor(Math.random() * 51 + 50)));

module.exports = createFibonacciSequence;
