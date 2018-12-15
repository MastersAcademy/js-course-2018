const { fibNumbers } = require('./task1.js');

describe('Fibonacci', () => {
    describe('Check the value in a series of Fibonacci numbers', () => {
        test('First value', () => {
            expect(fibNumbers(10)[0]).toBe(0);
        });
        test('Six value', () => {
            expect(fibNumbers(10)[5]).toBe(5);
        });
        test('Ten value', () => {
            expect(fibNumbers()[9]).toBe(34);
        });
    });
});
