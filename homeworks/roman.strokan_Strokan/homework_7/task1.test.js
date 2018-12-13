const { fib } = require('./task1');

describe('Fibonacci', () => {
    const arr = [0, 1];

    // Сheck start value

    describe('Сheck start value', () => {
        test('Сheck start value: array[0]', () => {
            expect(fib(arr)[0]).toBe(0);
        });
    });

    // Validation values for correct calculation

    describe('Check array', () => {
        test('Value 1: 51 (50-54)', () => {
            expect(fib(arr, 51)[fib(arr, 51).length - 1]).toBe(34);
        });

        test('Value 2: 70 (55-89)', () => {
            expect(fib(arr, 70)[fib(arr, 70).length - 1]).toBe(55);
        });

        test('Value 3 95 (90-100)', () => {
            expect(fib(arr, 95)[fib(arr, 95).length - 1]).toBe(89);
        });
    });
});
