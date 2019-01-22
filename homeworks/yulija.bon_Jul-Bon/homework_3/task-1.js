// 1.1
// Functions of the square
function squareNumber(a) {
    const square = a * a;
    console.log(square);
}

squareNumber(5);
squareNumber(15);
squareNumber(53);

// Another way

// function square (a) {
//     return Math.pow(a,2);
// }
// console.log(squareNumber(5));
// console.log(squareNumber(15));
// console.log(squareNumber(53));

// 1.2
// The function of creating an array with numbers
const doArray = (maxValue, step) => {
    const newArray = [];
    for (let i = 0; i <= maxValue; i += step) {
        newArray.push(i);
    }
    return newArray;
};

console.log(doArray(50, 5));
console.log(doArray(32, 4));
const arrayValue = doArray(32, 4);

// 1.3
// Square value of elements
const squareVal = i => i * i;
const arraySquare = arr => arr.map(squareVal);

console.log(arraySquare(arrayValue));
const newArrayValue = arraySquare(arrayValue);

// 1.4
// The sum of elements of an array
const arraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(arraySum(newArrayValue));
