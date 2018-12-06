// Task 1.1
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(15));
console.log(square(53));

// Task 1.2
function myArray(max, step) {
    const result = [];
    for (let num = 0; num <= max; num += step) {
        result.push(num);
    }
    return result;
}

console.log(myArray(50, 5));
console.log(myArray(32, 4));

// Task 1.3

const mySecondArray = myArray(32, 4);
const arrSquare = mySecondArray.map(square);
console.log(arrSquare);

// Task 1.4
const myFourthArray = arrSquare;
const sum = myFourthArray.reduce((a, b) => a + b, 0);
console.log(sum);
