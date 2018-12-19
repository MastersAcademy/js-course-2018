
const {
    fibonacci, getRangeNumber, ERROR_NEGATIVE, ERROR_NOT_NUMBER,
} = require('./task7_1');

describe('RangeNumber test', () => {
    Math.random = jest.fn();
    test('range bigger 50', () => {
        Math.random.mockReturnValueOnce(0);
        expect(getRangeNumber()).toBeCloseTo(50);
    });
    test('range less 100', () => {
        Math.random.mockReturnValueOnce(0.99);
        expect(getRangeNumber()).toBeCloseTo(100);
    });
});
describe('fibonacci test', () => {
    test('Array at value maxValue = 51', () => {
        expect(fibonacci(51)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('n should be a number', () => {
        expect(() => fibonacci({})).toThrow(ERROR_NOT_NUMBER);
    });
    test('only positive numbers', () => {
        expect(() => fibonacci(-1)).toThrow(ERROR_NEGATIVE);
    });
});
