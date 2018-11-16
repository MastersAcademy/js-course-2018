console.log('task 1.1');

function getPower(n) {
    return n * n;
}
console.log(getPower(5));
console.log(getPower(15));
console.log(getPower(53));


console.log('task 1.2');

function getArray(step, maxN) {
    const result = [];
    for (let i = 0; i <= maxN; i += step) {
        result.push(i);
    }
    return result;
}
console.log(getArray(5, 50));
console.log(getArray(4, 32));

console.log('task 1.3');

function getSomeArray(step, maxN) {
    const result = [];

    for (let i = 0; i <= maxN; i += step) {
        result.push(i ** 2);
    }
    return result;
}
console.log(getSomeArray(4, 32));

console.log('task 1.4');

function getSum(step, maxN) {
    const myArray = [];
    let sum = 0;

    for (let i = 0; i <= maxN; i += step) {
        const result = i ** 2;
        myArray.push(result);
        sum += result;
    }
    return sum;
}
console.log(getSum(4, 32));
