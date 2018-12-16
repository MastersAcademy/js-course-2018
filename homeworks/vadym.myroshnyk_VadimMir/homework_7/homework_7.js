// fibonacci
const random = Math.floor(Math.random() * (100 - 50 + 1) + 50);

function fib() {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= random; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(random));

module.exports = fib;
