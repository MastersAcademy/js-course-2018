const {
    fibonacci,
} = require('./fibonacci.js');

const { rand } = require('./fibonacci.js');

describe('test fibonacci', () => {
    test('start from [0, 1] if input 0', () => {
        expect(fibonacci(0)).toEqual([0, 1]);
    });
    test('is fibonacci object?', () => {
        expect(typeof fibonacci()).toBe('object');
    });
    test('comming data is array', () => {
        expect(Array.isArray(fibonacci())).toBe(true);
    });
    test('random num not biggest than 11 (only from 11 to 0)', () => {
        expect(rand).toBeLessThanOrEqual(11);
    });
    test('start from zero', () => {
        expect(fibonacci()[0]).toBe(0);
    });
    test('second num', () => {
        expect(fibonacci()[1]).toBe(1);
    });
    test('third come like undefined', () => {
        expect(fibonacci()[2]).toBe(undefined);
    });
});
