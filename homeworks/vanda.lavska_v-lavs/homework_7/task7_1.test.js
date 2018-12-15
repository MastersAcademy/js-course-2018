
const { fibonacci, getRangeNumber } = require('./task7_1');

describe('fibonacci test', () => {
    test('Array value at length = 6', () => {
        expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(12).length).toEqual(12);
    });

    test('n shouldbe a numb', () => {
        expect(() => fibonacci({})).toThrow('is not number');
    });
    test('only positive numbers', () => {
        expect(() => fibonacci(-1)).toThrow('nummber should be positive');
    });
    test('range', () => {
        const value = getRangeNumber();
        expect(value).toBeGreaterThanOrEqual(10);
        expect(value).toBeLessThanOrEqual(11);
    });
});
