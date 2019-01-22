// task 1.1
const square = n => n * n;

// task 1.2
const createSequense = (maxValue, step) => {
    const result = [];
    for (let index = 0; index <= maxValue; index += step) {
        result.push(index);
    }
    return result;
};

// task 1.3
const squareArray = (array) => {
    const result = array.map(e => square(e));
    return result;
};

// task 1.4
const sumArray = (array) => {
    const result = array.reduce((sum, current) => sum + current, 0);
    return result;
};

console.log(square(5));
console.log(square(15));
console.log(square(53));

console.log(createSequense(50, 5));
console.log(createSequense(32, 4));

console.log(squareArray(createSequense(32, 4)));

console.log(sumArray(squareArray(createSequense(32, 4))));
