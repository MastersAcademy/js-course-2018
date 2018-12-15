function fibo(max) {
    const array = [0, 1];
    while (array[array.length - 1] + array[array.length - 2] <= max) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array;
}

module.exports = fibo;
console.log(fibo(Math.floor(Math.random() * 51) + 50));
