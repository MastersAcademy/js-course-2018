const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const fibonacciSequence = (end) => {
    const result = [];
    let i = 0;
    let fibonacci;

    while (true) {
        fibonacci = i >= 2 ? result[i - 1] + result[i - 2] : i;
        if (fibonacci > end) break;

        result.push(fibonacci);
        i++;
    }

    return result;
};

const getSequence = () => {
    const MIN = 50;
    const MAX = 100;
    const END = random(MIN, MAX);
    console.log('The last element of the sequence should be less than: ', END);
    console.table(fibonacciSequence(END));
};

getSequence();

module.exports = { random, fibonacciSequence };
