const { fib } = require('./task1');

describe('Fibonacci', () => {
    // Сheck start value

    describe('Сheck start value', () => {
        test('Сheck start value: array[0]', () => {
            expect(fib()[0]).toBe(0);
        });
    });

    // Validation values for correct calculation

    describe('Check array', () => {
        test('Value 1: 51 (50-54)', () => {
            expect(fib(51)[fib(51).length - 1]).toBe(34);
        });

        test('Value 2: 70 (55-89)', () => {
            expect(fib(70)[fib(70).length - 1]).toBe(55);
        });

        test('Value 3 95 (90-100)', () => {
            expect(fib(95)[fib(95).length - 1]).toBe(89);
        });
    });
});
