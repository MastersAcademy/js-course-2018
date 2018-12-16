const { fibonacci } = require('./fibonacciArray');

test('if number is minimal test', () => {
    const minFibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibonacci(50)).toEqual(minFibonacciArray);
});

test('if number up to 55 test', () => {
    const minFibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibonacci(55)).toEqual(minFibonacciArray);
});
