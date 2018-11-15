// task 1.1

function square(number) {
    return number * number;
}

console.log(square(5));
console.log(square(15));
console.log(square(53));

// task 1.2

function arrayWithStep(max, step) {
    const array = [];
    for (let i = 0; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

console.log(arrayWithStep(50, 5));
console.log(arrayWithStep(32, 4));

// task 2.1

function arrayElementsToSquare(array) {
    return array.map(element => element * element);
}

console.log(arrayElementsToSquare(arrayWithStep(32, 4)));

// task 2.2

function arrayElementsSum(array) {
    return array.reduce((prev, next) => prev + next);
}

console.log(arrayElementsSum(arrayElementsToSquare(arrayWithStep(32, 4))));
