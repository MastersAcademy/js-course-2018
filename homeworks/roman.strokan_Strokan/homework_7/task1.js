function fib(array, endVal) {
    const n = array[array.length - 2] + array[array.length - 1];
    if (n < endVal) {
        array.push(n);
        fib(array, endVal);
    }
    return array;
}

function main() {
    const endVal = Math.floor(Math.random() * 50) + 50;
    const startAray = [0, 1];
    return fib(startAray, endVal);
}
console.log(main());

module.exports = { fib };
