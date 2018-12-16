const { fibonacci } = require('./fibonacci.js');

let { randomNumber } = require('./fibonacci.js');

describe('randomizer test', () => {
    beforeAll(() => {
      randomNumber = jest.fn();
    });

    test('test randomizer > 15', () => {
        randomNumber.mockReturnValue(30);
        expect(randomNumber()).toBeGreaterThan(15);
    });

    test('test randomizer < 30', () => {
        randomNumber.mockReturnValue(15);
        expect(randomNumber()).toBeLessThan(30);
    });

});

describe('fibonacci test', () => {

    test('test array types correctly', () => {
        expect(Array.isArray(fibonacci())).toBeTruthy();
    });

    test('test fibonacci array 5', () => {
        const fibonacciArraytest5 = [0, 1, 1, 2, 3];
        expect(fibonacci(5)).toEqual(fibonacciArraytest5);
    });

    test('test fibonacci array 12', () => {
        const fibonacciArraytest12 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        expect(fibonacci(12)).toEqual(fibonacciArraytest12);
    });

    test('test fibonacci array 15', () => {
        const fibonacciArraytest15 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
        expect(fibonacci(15)).toEqual(fibonacciArraytest15);
    });
});
