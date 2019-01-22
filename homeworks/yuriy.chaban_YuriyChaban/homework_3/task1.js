// 1.1
function square(arg) {
    return arg * arg;
}
console.log('\nTask 1.1:\n');
console.log(square(2));
console.log(square(15));
console.log(square(53));

// 1.2
function createArrayOfNumberWithStep(max, step) {
    const arrayOfNumbers = [];
    for (let i = 0; i <= max; i += step) {
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}
console.log('\nTask 1.2:\n');
console.log(createArrayOfNumberWithStep(50, 5));
console.log(createArrayOfNumberWithStep(32, 4));

// 1.3
function arrayToSquare(array) {
    return array.map(item => square(item));
}
console.log('\nTask 1.3:\n');
console.log(arrayToSquare(createArrayOfNumberWithStep(32, 4)));

// 1.4
function amountOfArray(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}
console.log('\nTask 1.4:\n');
console.log(amountOfArray(arrayToSquare(createArrayOfNumberWithStep(32, 4))));
