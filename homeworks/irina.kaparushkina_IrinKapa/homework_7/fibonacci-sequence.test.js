const { fibonacci, randomNumber } = require('./fibonacci-sequence.js');

describe('fibonacci sequence', () => {
    test('the last number is less than 100', () => {
        expect(randomNumber()).toBeLessThan(100);
    });
    test('the last number is more than 50', () => {
        expect(randomNumber()).toBeGreaterThan(50);
    });

    test('fibonacci() make array', () => {
        expect(Array.isArray(fibonacci())).toBe(true);
    });

    test('the function fibonacci() returns something', () => {
        expect(fibonacci()).toBeDefined();
    });

    test('check the zero element of the array', () => {
        expect(fibonacci()[0]).toBe(0);
    });

    test('check the first element of the array', () => {
        expect(fibonacci()[1]).toBe(1);
    });

    test('check the second element of the array', () => {
        expect(fibonacci()[2]).toBe(fibonacci()[0] + fibonacci()[1]);
    });

    test('check the Fibonacci sequence seventh and eighth elements', () => {
        expect(fibonacci()[7] / fibonacci()[8]).toBeCloseTo(0.618);
    });

    test('check the last element of the array', () => {
        expect(fibonacci()[fibonacci().length - 1]).toBeGreaterThanOrEqual(34);
    });

    test('check the sequence contains 5', () => {
        expect(fibonacci()).toContain(5);
    });
});
