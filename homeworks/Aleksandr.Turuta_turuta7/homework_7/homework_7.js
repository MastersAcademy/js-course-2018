function makeFiboArr(rand) {
    const array = [0, 1];
    const randNum = rand === undefined ? 50 : rand;
    console.log(randNum);
    for (let i = 0; i < randNum; i++) {
        const fib = array[i - 1] + array[i - 2];
        if (i >= 2 && fib < randNum) array.push(fib);
    }
    return array;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(makeFiboArr(randomNumber(50, 100)));

module.exports = { makeFiboArr };
