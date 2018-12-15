
const {
    fibonacci, getRangeNumber, errorNegative, errorNotNumber,
} = require('./task7_1');

describe('fibonacci test', () => {
    test('Array value at length = 6', () => {
        expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(12).length).toEqual(12);
    });

    test('n should be a number', () => {
        expect(() => fibonacci({})).toThrow(errorNotNumber);
    });
    test('only positive numbers', () => {
        expect(() => fibonacci(-1)).toThrow(errorNegative);
    });
    test('range', () => {
        const value = getRangeNumber();
        expect(value).toBeGreaterThanOrEqual(11);
        expect(value).toBeLessThanOrEqual(12);
    });
});
