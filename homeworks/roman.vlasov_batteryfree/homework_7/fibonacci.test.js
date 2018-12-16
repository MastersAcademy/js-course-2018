const { fibonacci, rundomNumber } = require('./fibonacci.js');

const fibonacciArraytest5 = [0, 1, 1, 2, 3];

const fibonacciArraytest12 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const fibonacciArraytest15 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

test('test randomizer > 15', () => {
    expect(rundomNumber(15, 30)).toBeGreaterThan(15);
});

test('test randomizer < 30', () => {
    expect(rundomNumber(15, 30)).toBeLessThan(30);
});

test('test array types correctly', () => {
    expect(Array.isArray(fibonacci())).toBeTruthy();
});

test('test fibonacci array 5', () => {
    expect(fibonacci(5)).toEqual(fibonacciArraytest5);
});

test('test fibonacci array 12', () => {
    expect(fibonacci(12)).toEqual(fibonacciArraytest12);
});

test('test fibonacci array 15', () => {
    expect(fibonacci(15)).toEqual(fibonacciArraytest15);
});
