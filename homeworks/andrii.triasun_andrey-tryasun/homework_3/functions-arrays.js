// 1.1 Square function
const square = x => x * x;

console.log(square(5));
console.log(square(15));
console.log(square(53));

// 1.2 Function of creating an array from zero to the 'max' value with a 'step' between the elements
const createArray = (max, step) => {
    const array = [];
    const length = max / step;
    for (let i = 0; i <= length; i++) {
        array[i] = i * step;
    }
    return array;
};

const array1 = createArray(50, 5);
console.log(array1);
const array2 = createArray(32, 4);
console.log(array2);

// 1.3 Squaring all the values of the array elements
const arraySquares = array2.map(square);
console.log(arraySquares);

// 1.4 Sum of array elements
const sum = arraySquares.reduce((prev, cur) => prev + cur, 0);
console.log(sum);
