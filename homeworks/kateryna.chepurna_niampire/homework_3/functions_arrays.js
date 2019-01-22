// 1.1

function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(5));
console.log(squareNumber(15));
console.log(squareNumber(53));

// 1.2

function addNumberToArray(maxValue, stepValue) {
    const array = [];
    for (let i = 0; i <= maxValue; i += stepValue) array.push(i);
    return array;
}

console.log(addNumberToArray(32, 4));

// 1.3

function squareArray(array) {
    return array.map(element => element * element);
}
console.log(squareArray(addNumberToArray(32, 4)));

// 1.4

function sumArray(array) {
    return array.reduce((n1, n2) => (n1 + n2));
}
console.log(sumArray(squareArray(addNumberToArray(32, 4))));
