// task 1.1
function square(n) {
    return n * n;
}

// task 1.2
function arrayNumbers(max, step) {
    const array = [];
    for (let i = 0; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

// task 1.3
const sqr = arrayNumbers(32, 4).map(square);
console.log(sqr);

// task 1.4
const sum = sqr.reduce((n, b) => n + b);
console.log(sum);
