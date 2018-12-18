function fib(maxNum) {
    const arr = [0, 1];
    let current = 0;

    while (current <= maxNum) {
        current += arr[arr.length - 2] || 1;
        if (current <= maxNum) arr.push(current);
        else break;
    }

    return arr;
}

const random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(random, fib(random));

module.exports = { fib, random };
