function getRandomFibinachi() {
    const min = 50;
    const max = 100;
    return Math.floor(Math.random() * (max - min) + min);
}

const randomFibinachi = getRandomFibinachi();
console.log(randomFibinachi);

// [0,1,1,2,3,5,8,13,21,34,55,89,144]

function fibonachi(n) {
    const arrFib = [0, 1];
    let result = 0;
    for (; result <= n;) {
        result = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
        if (result <= n) arrFib.push(result);
    }
    return arrFib;
}
const fib = fibonachi(randomFibinachi);

console.log(fib);
module.exports = fibonachi;
