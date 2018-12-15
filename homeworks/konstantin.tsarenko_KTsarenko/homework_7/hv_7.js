
function getRandomInt() {
    const min = 50;
    const max = 100;
    return Math.floor(Math.random() * (max - min)) + min;
}

function getFibonacciSequence() {
    const n = getRandomInt();
    const fibonacci = [0, 1];

    for (let i = 2; ; i++) {
        const currentFib = fibonacci[i - 1] + fibonacci[i - 2];
        if (currentFib < n) {
            fibonacci[i] = currentFib;
        } else {
            break;
        }
    }
    console.log(fibonacci);
    return fibonacci;
}

module.exports = getFibonacciSequence;
