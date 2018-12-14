const { fibonacci } = require('./fibonacci.js');

describe('fibonacci test', () => {
    test('test array types correctly', () => {
        expect(Array.isArray(fibonacci())).toBe(true);
    });
    test('test first elemet', () => {
        expect(fibonacci()[0]).toBe(0);
    });
    test('test second element = 1', () => {
        expect(fibonacci()[1]).toBe(1);
    });
    test('test fibonacci array', () => {
        const arrFibonacci = fibonacci();
        for (let i = 2; i < arrFibonacci.length; i++) {
            expect(arrFibonacci[i - 2] + arrFibonacci[i - 1]).toBe(arrFibonacci[i]);
        }
    });
});
