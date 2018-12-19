// fibonacci
const randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50);

function fib(max) {
    const arr = [0];
    let a = 1;
    let b = 0;
    for (let i = 0; i < max; i += a) {
        const c = a + b;
        a = b;
        b = c;
        arr.push(c);
    }
    return arr;
}

console.log(fib(randomNum));

module.exports = fib;
