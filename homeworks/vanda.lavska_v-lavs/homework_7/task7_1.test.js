
const {
    fibonacci, getRangeNumber, ERRORNEGATIVE, ERRORNOTNUMBER,
} = require('./task7_1');

describe('getRangeNumber test', () => {
    test('range', () => {
        const value = getRangeNumber();
        expect(value).toBeGreaterThanOrEqual(50);
        expect(value).toBeLessThanOrEqual(100);
    });
});

describe('fibonacci test', () => {
    test('Array at value number = 51', () => {
        expect(fibonacci(51)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('n should be a number', () => {
        expect(() => fibonacci({})).toThrow(ERRORNOTNUMBER);
    });
    test('only positive numbers', () => {
        expect(() => fibonacci(-1)).toThrow(ERRORNEGATIVE);
    });
});
