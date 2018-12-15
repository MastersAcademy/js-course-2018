const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

const fib = (iter) => {
    const arr = [0, 1];
    for (let i = 0; i < iter; i++) {
        const a = arr[i] + arr[i + 1];
        if (a <= random) {
            arr.push(a);
        }
    }
    return arr;
};

console.log(fib(10));

module.exports = { fib };
