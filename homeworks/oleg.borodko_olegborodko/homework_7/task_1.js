function getRandom(min, max) {
    const minEl = Math.ceil(min);
    const maxEl = Math.floor(max);
    return Math.floor(Math.random() * (maxEl - minEl + 1)) + minEl;
}

function fibonacci(max) {
    const result = [0];
    let nextNumber = 1;

    while (nextNumber <= max) {
        result.push(nextNumber);

        const currentElement = result.length - 1;
        const prevElement = result.length - 2;
        nextNumber = result[currentElement] + result[prevElement];
    }

    return result;
}

const randomNumber = getRandom(50, 100);
const resultFibonacci = fibonacci(randomNumber);

console.log(randomNumber);
console.log(resultFibonacci);

module.exports.resultFibonacci = resultFibonacci;
module.exports.randomNumber = randomNumber;
