const { fib } = require('./fibonacci.js');

describe('Fibonacci test', () => {
    test('Type array', () => {
        expect(Array.isArray(fib())).toBe(true);
    });
    test('test first element', () => {
        expect(fib()[0]).toBe(0);
    });
    test('test four element', () => {
        expect(fib()[4]).toBe(3);
    });
    test('test ten element', () => {
        expect(fib()[10]).toBe(55);
    });
    test('sum two previous elements', () => {
        const num = fib();
        for (let i = 2; i < num.length; i++) {
            expect(num[i]).toBe(num[i - 1] + num[i - 2]);
        }
    });
});
