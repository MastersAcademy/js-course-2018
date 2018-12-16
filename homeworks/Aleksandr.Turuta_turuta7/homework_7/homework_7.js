function makeFiboArr(rand) {
    const array = [];
    const randNum = rand === undefined ? 50 : rand;
    console.log(randNum);
    for (let i = 0; i < 30; i++) {
        const fib = array[i - 1] + array[i - 2];
        if (i === 0 && randNum > 0) array.push(0);
        if (i === 1 && randNum > 1) array.push(1);
        if (i === 2 && randNum > 1) array.push(1);
        if (i > 2 && fib < randNum) array.push(fib);
    }
    return array;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(makeFiboArr(randomNumber(50, 100)));

module.exports = { makeFiboArr };
