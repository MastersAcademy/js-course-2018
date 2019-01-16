function fib(maxNum) {
    const arr = [0];
    let current = 1;

    while (current <= maxNum) {
        arr.push(current);
        current = arr[arr.length - 1] + arr[arr.length - 2];
    }

    return arr;
}

const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(random, fib(random));

module.exports = { fib, random };
