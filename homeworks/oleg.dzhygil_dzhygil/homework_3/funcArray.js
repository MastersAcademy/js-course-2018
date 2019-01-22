// Task 1.1

function squareNumber(number) {
    return number * number;
}

console.log(squareNumber(53));
console.log(squareNumber(5));
console.log(squareNumber(15));

// Task 1.2

function numberArray(maxnum, stepnum) {
    const array = [];
    for (let number = 0; number <= maxnum; number += stepnum) array.push(number);
    return array;
}
console.log(numberArray(50, 5));
console.log(numberArray(32, 4));

// Task 1.3

function arrSquare(array) {
    return array.map(element => element * element);
}
console.log(arrSquare(numberArray(32, 4)));

// Task 1.4

function sumofArray(array) {
    return array.reduce((n1, n2) => n1 + n2);
}
console.log(sumofArray(arrSquare(numberArray(32, 4))));
