const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

const fib = (maxNum) => {
    const arr = [0, 1];
    for (let i = 0; i < 20; i++) {
        const a = arr[i] + arr[i + 1];
        if (a <= maxNum) {
            arr.push(a);
        }
    }
    return arr;
};

console.log(fib(random));
console.log(random);

module.exports = { fib };
