// task_1.1
function toSquare(n) {
    return n * n;
}
console.log(toSquare(5));
console.log(toSquare(15));
console.log(toSquare(53));

// task_1.2
function toArray(max, step) {
    const array = [];
    for (let i = 0; i <= max; i += step) {
        array.push(i);
    }
    return array;
}
console.log(toArray(50, 5));
console.log(toArray(32, 4));

// task_1.3
const squarredArray = toArray(32, 4).map(number => toSquare(number));
console.log(squarredArray);

// task_1.4
const arraySum = squarredArray.reduce((sum, number) => sum + number);
console.log(arraySum);
