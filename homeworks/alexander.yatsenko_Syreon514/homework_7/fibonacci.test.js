const createFibonacciSequence = require('./fibonacci.js');

test('Function returns an array?', () => {
    expect(Array.isArray(createFibonacciSequence(100))).toEqual(true);
});

test('Is the first element of an array is 0?', () => {
    expect(createFibonacciSequence(100)[0]).toEqual(0);
});

test('Is the second element of an array is 1?', () => {
    expect(createFibonacciSequence(100)[1]).toEqual(1);
});

test('Is each element of an array is the sum of the previous two?', () => {
    const arr = createFibonacciSequence(100);
    for (let i = 2; i < arr.length; i++) {
        expect(arr[i]).toEqual(arr[i - 1] + arr[i - 2]);
    }
});
