const fibonacci = require('./fibonacci.task.js');

describe('Fibonacci test', () => {
    test('Check for type', () => {
        expect(Array.isArray(fibonacci())).toBe(true);
    });
    test('Test for first element to be 0', () => {
        expect(fibonacci()[0]).toBe(0);
    });
    test('Test for first element to be 1', () => {
        expect(fibonacci()[1]).toBe(1);
    });
    test('Sum of two elements', () => {
        const number = fibonacci();
        for (let i = 2; i < number.length; i++) {
            expect(number[i]).toBe(number[i - 1] + number[i - 2]);
        }
    });
});
