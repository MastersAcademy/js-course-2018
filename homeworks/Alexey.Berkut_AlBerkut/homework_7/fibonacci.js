function randomInt(min, max) {
    const random = Math.floor(min + Math.random() * (max + 1 - min));
    return random;
}

function fib(min, max) {
    let a = 0;
    let b = 1;
    const rand = randomInt(min, max);
    const result = [a, b];
    for (let i = 2; i <= rand; i++) {
        const c = a + b;
        a = b; b = c;
        result.push(b);
    }
    return result;
}

console.log(fib(50, 100));

module.exports = { fib };
