function fib(n) {
    const fibArray = [0, 1, 1];
    let a = 1;
    let b = 1;

    do {
        const c = a + b;
        a = b;
        b = c;
        if (b <= n) fibArray.push(b);
    } while (b <= n);

    return fibArray;
}

function getRandomfromFiftyToHundred() {
    return (Math.random() * 51) + 50;
}
const random = getRandomfromFiftyToHundred();
const fibonacciArr = fib(random);

module.exports = { fibonacciArr };
