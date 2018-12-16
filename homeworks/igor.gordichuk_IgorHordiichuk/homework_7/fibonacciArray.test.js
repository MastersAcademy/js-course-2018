const { fibonacci } = require('./fibonacciArray');

test('Fibonacci function test', () => {
    const minFibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibonacci(50)).toEqual(minFibonacciArray);
});
