// Task 1.1
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(15));
console.log(square(53));

// Task 1.2
function createArray(maxvalue, step) {
    const arr = [];
    for (let i = 0; i <= maxvalue; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(createArray(50, 5));
console.log(createArray(32, 4));

// Task 1.3
function degreeArray(array) {
    return array.map(square);
}
const numbers = [0, 4, 8, 12, 16, 20, 24, 28, 32];
const degree = degreeArray(numbers);
console.log(degree);

// Task 1.4
function arraySum(array) {
    const total = array.reduce((a, b) => a + b);
    return total;
}
const total = arraySum(degreeArray(createArray(32, 4)));
console.log(total);
