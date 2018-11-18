console.log('task 1.1');

function getPower(n) {
    return n * n;
}
console.log(getPower(5));
console.log(getPower(15));
console.log(getPower(53));

console.log('task 1.2');

function getArray(step, maxN) {
    const myArray = [];
    for (let i = 0; i <= maxN; i += step) {
        myArray.push(i);
    }
    return myArray;
}
console.log(getArray(5, 50));
console.log(getArray(4, 32));

console.log('task 1.3');

const finalArray = getArray(4, 32).map(getPower);

console.log(finalArray);

console.log('task 1.4');

function getSum() {
    return finalArray.reduce((sum, current) => sum + current);
}
console.log(getSum());
