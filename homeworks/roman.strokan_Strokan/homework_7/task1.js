function randomNamber() {
    const randomNum = Math.floor(Math.random() * 50) + 50;
    return randomNum;
}

function fib(endVal) {
    const array = [0];
    let num = 1;
    while (num <= endVal) {
        array.push(num);
        num = array[array.length - 2] + array[array.length - 1];
    }
    return array;
}

console.log(fib(randomNamber()));

module.exports = { fib };
