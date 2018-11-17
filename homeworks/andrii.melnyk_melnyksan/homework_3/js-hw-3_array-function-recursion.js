// 1 Operating with functions and arrays:
// 1.1 Write a function that raises to a square passed to it argument
// data for test: 5, 15, 53

const squaredNative = a => a * a;
// const squared = function (a) {
//     return a * a;
// };

const squaredExponentiation = a => a ** 2;
// const squared2 = function (a) {
//     return a ** 2;
// };

console.log('\nsquaredNative(5)', squaredNative(5));
console.log('squaredNative(15)', squaredNative(15));
console.log('squaredNative(53)', squaredNative(53), '\n');

console.log('squaredExponentiation(5)', squaredExponentiation(5));
console.log('squaredExponentiation(15)', squaredExponentiation(15));
console.log('squaredExponentiation(53)', squaredExponentiation(53), '\n');

const array = [5, 15, 53];

const arraySquaredNativeMap = array.map(e => e * e);
// const arrSquared = array.map(function (e) {
//     return e * e;
// });

const arraySquaredExponentiationMap = array.map(e => e ** 2);

console.log('arraySquaredNativeMap', arraySquaredNativeMap, '\n');
console.log('arraySquaredExponentiationMap', arraySquaredExponentiationMap, '\n');

// 1.2 Write a function that creates an array of numbers from 0 to a given value
// with a given step between the values of each elements

const creatingArrayWithRangeStep = function (min, max, step) {
    const arrayService = [];

    for (let i = min; i <= max; i += step) {
        arrayService.push(i);
    }

    return arrayService;
};

// 1) data for test:
// min: 0,
// max: 50,
// step: 5

console.log('creatingArrayWithRangeStep', creatingArrayWithRangeStep(0, 50, 5));

// 2) data for test:
// min: 0,
// max: 32,
// step: 4

console.log('creatingArrayWithRangeStep', creatingArrayWithRangeStep(0, 32, 4), '\n');

// 1.3 Raise all the values of the array elements to the square.
// The input array is the result of the previous task (2) with arguments 32 and 4.
// data for test: [ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]
// expected result: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]

const arrayWithRangeStep = creatingArrayWithRangeStep(0, 32, 4);

const arrayWithRangeStepSquaredNativeMap = arrayWithRangeStep.map(e => e * e);

console.log('arrayWithRangeStepSquaredNativeMap', arrayWithRangeStepSquaredNativeMap, '\n');

// 1.4 Find the sum of the array elements from the previous task
// data for test: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
// expected result: 3264

const arrayWithRangeStepSquaredSummed = arrayWithRangeStepSquaredNativeMap.reduce((a, b) => a + b);

console.log('arrayWithRangeStepSquaredNativeMapSummed', arrayWithRangeStepSquaredSummed, '\n');

// Here below are some editings for 1.3 and 1.4 tasks

const creatingArrayLimitStep = function (limit, step) {
    const arrayService = [];

    for (let i = 0; i <= limit; i += step) {
        arrayService.push(i);
    }

    return arrayService;
};

const arrayLimitStep = creatingArrayLimitStep(32, 4);

console.log('arrayLimitStep', arrayLimitStep, '\n');

const arrayLimitStepSquaredNativeMap = arrayLimitStep.map(e => e * e);

console.log('arrayLimitStepSquaredNativeMap', arrayLimitStepSquaredNativeMap, '\n');

const arrayLimitStepSquaredNativeMapSummed = arrayLimitStepSquaredNativeMap.reduce((a, b) => a + b);

console.log('arrayLimitStepSquaredNativeMapSummed', arrayLimitStepSquaredNativeMapSummed, '\n');

// 2 Recursion
// Given a range of natural numbers from 10 to 600 inclusive.
// Input numbers, that is power of two (1, 2, 4, 8, 16, ..., 512, etc).
// Use the recursion to check if the number is the power of the two.

const isPowOfTwo = function isPowOfTwo(n) {
    if (typeof n !== 'number') {
        return 'Not a number';
    }
    return n && (n & (n - 1)) === 0;
};

// I enter min and max by hand
// but if it necessary the input data could be written as arguments
const allNumbersPowerOfTwo = function () {
    const min = 10;
    const max = 600;
    const arrayService = [];

    for (let i = min; i <= max; i++) {
        if (isPowOfTwo(i) === true) {
            arrayService.push(i);
        }
    }

    return arrayService;
};

console.log('allNumbersPowerOfTwo', allNumbersPowerOfTwo(), '\n');

// Sorry, I stuck on the second task
// I could not find another way to check if the number is the power of the two
// or come up with my own way, while I still try to understand recursion, this is my draft so far
