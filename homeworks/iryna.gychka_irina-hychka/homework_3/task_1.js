// Counts numbers in square
function countSquare(number) {
    if (typeof number === 'number') {
        return number * number;
    }
    return NaN;
}

// Creates an array with numbers with x-increasing amount
function numbersArray(maxLength, iterationNum) {
    const numsArray = [];
    for (let number = 0; number <= maxLength; number += iterationNum) {
        numsArray[numsArray.length] = number;
    }
    return numsArray;
}

// Creates a new array and calculates the power of a number in a square
function numsSquare(numArray) {
    return numArray.map(num => (num * num));
}

// Sums all elements of the array
function numSum(squareNumArray) {
    const reducer = (sum, currentEl) => sum + currentEl;
    return squareNumArray.reduce(reducer);
}

// The Output
// Task 1.1
console.log(countSquare(5));
console.log(countSquare(15));
console.log(countSquare(53));

// Task 1.2
console.log(numbersArray(50, 5));
const q = numbersArray(32, 4);
console.log(q);

// Task 1.3
const w = numsSquare(q);
console.log(w);

// Task 1.4
const z = numSum(w);
console.log(z);
