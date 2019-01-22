// task 1.1
function square(n) {
    return n * n;
}
console.log(square(5));
console.log(square(15));
console.log(square(53));

// task 1.2
function createArray(step, value) {
    const newArray = [];
    for (let i = 0; i <= value; i += step) {
        newArray.push(i);
    }
    return newArray;
}
console.log(createArray(5, 50));
console.log(createArray(4, 32));

// task 1.3
function squareArray(newArray) {
    const sqrArray = newArray.map(square);
    return sqrArray;
}
console.log(squareArray(createArray(4, 32)));

// task 1.4
function sumArray(newArray) {
    const reducer = (accuumulator, currentValue) => accuumulator + currentValue;
    const sArray = newArray.reduce(reducer);
    return sArray;
}
console.log(sumArray(squareArray(createArray(4, 32))));
