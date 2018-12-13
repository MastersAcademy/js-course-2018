function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    if (n === 0) return 0;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

function cycleAndTest(rand) {
    const array = [];
    for (let i = 0; i < 30; i++) {
        if (fibonacci(i) > rand) { return array; }
        array[i] = fibonacci(i);
    }
    return array;
}

const random = Math.floor(Math.random() * (100 - 50) + 50);
console.log(cycleAndTest(random));

module.exports = { fibonacci, cycleAndTest };
