const random = require('./random.js');

function fibo(max) {
    const array = [0, 1];
    while (array[array.length - 1] + array[array.length - 2] <= max) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array;
}
console.log(fibo(random(50, 100)));

module.exports = fibo;
