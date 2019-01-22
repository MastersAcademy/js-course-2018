const { fib } = require('./fibonacci.js');

describe('Fibonacci test', () => {
    test('Type array', () => {
        expect(Array.isArray(fib())).toBe(true);
    });
    test('test first element', () => {
        expect(fib()[0]).toBe(0);
    });
    test('test two element', () => {
        expect(fib()[1]).toBe(1);
    });
    test('sum two previous elements', () => {
        const num = fib();
        for (let i = 2; i < num.length; i++) {
            expect(num[i]).toBe(num[i - 1] + num[i - 2]);
        }
    });
});
