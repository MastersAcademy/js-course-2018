const { fib } = require('./main.js');

describe('Fibonacci', () => {
    describe('Сheck value', () => {
        test('First value', () => {
            expect(fib(10)[0]).toBe(0);
        });

        test('Four value', () => {
            expect(fib(10)[3]).toBe(2);
        });

        test('Ten value', () => {
            expect(fib(10)[9]).toBe(34);
        });
    });

    // The last test does not always pass, because of the randomness.
    describe('Check last element of array', () => {
        test('Value 2: 70 (55-89)', () => {
            expect(fib(10)[fib(10).length - 1]).toBe(55);
        });
    });
});
