function fib() {
    const maxNumber = Math.random() * (100 - 50) + 50;
    const arr = [0, 1];
    let first = 0;
    let second = 1;
    let current = first + second;

    while (current <= maxNumber) {
        arr.push(current);
        first = second;
        second = current;
        current = first + second;
    }
    return arr;
}
console.log(fib());

module.exports = { fib };
