// task1.1

function pow(number) {
    return number * number;
}
console.log(pow(5));
console.log(pow(15));
console.log(pow(53));

// task1.2

function createArrayWithStep(maxNumber, step) {
    const numbers = [];
    for (let i = 0; i <= maxNumber; i += step) {
        numbers.push(i);
    }
    return numbers;
}
console.log(createArrayWithStep(50, 5));
console.log(createArrayWithStep(32, 4));

// task2.1

function someArray(lngth, step) {
    const arr = [];
    for (let i = 0; i <= lngth; i += step) {
        arr.push(i);
    }
    return arr;
}
const arraypow = someArray(32, 4).map(number => pow(number));
console.log(arraypow);

const arraysum = arraypow.reduce((sum, num) => sum + num);
console.log(arraysum);
