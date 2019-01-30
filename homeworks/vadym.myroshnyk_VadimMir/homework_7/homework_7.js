// fibonacci
const randomNum = Math.floor(Math.random() * (100 - 50 + 1) + 50);

function fib(max) {
    const array = [0, 1];
    let i = 0;
    while (i < max) {
        const sum = array[[array.length - 1]] + array[[array.length - 2]];
        if (sum > max) return array;
        array.push(sum);
        i++;
    }
    return array;
}

console.log(fib(randomNum));

module.exports = fib;
