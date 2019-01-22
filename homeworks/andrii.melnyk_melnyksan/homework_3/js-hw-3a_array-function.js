// 1 Operating with functions and arrays:
// 1.1 Write a function that raises to a square passed to it argument
// data for test: 5, 15, 53

const toSquare = a => a ** 2;

console.log('\ntoSquare(5)', toSquare(5));
console.log('toSquare(15)', toSquare(15));
console.log('toSquare(53)', toSquare(53), '\n');

// 1.2 Write a function that creates an array of numbers from 0 to a given value
// with a given step between the values of each elements
//  data for test: 1) min: 0, max: 50, step: 5
//                 2) min: 0, max: 32, step: 4

const toCreateArrayRangeStep = (min, max, step) => {
    const arrayService = [];

    for (let i = min; i <= max; i += step) {
        arrayService.push(i);
    }

    return arrayService;
};

console.log('toCreateArrayRangeStep(0, 50, 5)', toCreateArrayRangeStep(0, 50, 5));
console.log('toCreateArrayRangeStep(0, 32, 4)', toCreateArrayRangeStep(0, 32, 4), '\n');

// 1.3 Raise all the values of the array elements to the square.
// The input array is the result of the previous task (2) with arguments 32 and 4.
// data for test: [ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]
// expected result: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]

const arrayRangeStep = toCreateArrayRangeStep(0, 32, 4);
const squaredArrayRangeStep = arrayRangeStep.map(e => e ** 2);

console.log('squaredArrayRangeStep', squaredArrayRangeStep, '\n');

// 1.4 Find the sum of the array elements from the previous task
// data for test: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
// expected result: 3264

const sumSquaredArrayRangeStep = squaredArrayRangeStep.reduce((a, b) => a + b);

console.log('sumSquaredArrayRangeStep', sumSquaredArrayRangeStep, '\n');
