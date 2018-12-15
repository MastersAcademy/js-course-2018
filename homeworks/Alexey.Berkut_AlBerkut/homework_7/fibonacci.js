function fib() {
    let a = 0;
    let b = 1;
    const rand = Math.floor(Math.random() * 50 + 50);
    const result = [a, b];
    for (let i = 3; i <= rand; i++) {
        const c = a + b;
        a = b; b = c;
        result.push(b);
    }
    // console.log(rand); /* for testing */
    return result;
}

console.log(fib());

module.exports = { fib };
