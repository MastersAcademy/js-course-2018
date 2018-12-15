const { fib } = require('./fibonacci.js');

describe('Fibonacci test', () => {
    test('Type array', () => {
        expect(Array.isArray(fib())).toBe(true);
    });
    test('test first element', () => {
        expect(fib()[0]).toBe(0);
    });
    test('test four element', () => {
        expect(fib()[4].toBe(2));
    });
    test('test ten element', () => {
        expect(fib()[10].toBe(34));
    });
});
