function cycleAndTest(rand) {
    console.log(rand);

    const array = [];
    for (let i = 0; i < 30; i++) {
        const fib = array[i - 1] + array[i - 2];
        if (i === 0 && rand > 0) array.push(0);
        if (i === 1 && rand > 1) array.push(1);
        if (i === 2 && rand > 1) array.push(1);
        if (i > 2 && fib < rand) array.push(fib);
    }
    return array;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(cycleAndTest(randomNumber(50, 100)));

module.exports = { cycleAndTest };
