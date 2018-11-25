//  1.1

function squareOfNumber(n) {
    return n * n;
}
console.log(squareOfNumber(5));
console.log(squareOfNumber(15));
console.log(squareOfNumber(53));

//  1.2.1 and 1.2.2

function stepArray(maxNumber, step) {
    const array = [];
    for (let i = 0; i <= maxNumber; i += step) {
        array.push(i);
    }
    return array;
}
console.log(stepArray(50, 5));
console.log(stepArray(32, 4));


//  1.3

function elementsToSquare(array) {
    return array.map(n => n * n);
}

console.log(elementsToSquare(stepArray(32, 4)));

//  1.4

function elementsSum(array) {
    return array.reduce((sum, nextNumber) => sum + nextNumber);
}

console.log(elementsSum(elementsToSquare(stepArray(32, 4))));
