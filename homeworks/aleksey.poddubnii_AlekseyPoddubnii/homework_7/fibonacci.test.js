const {
    fibonacci,
} = require('./fibonacci.js');

const { rand } = require('./fibonacci.js');

describe('test fibonacci', () => {
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
    test('third come like first of number of fibanacci', () => {
        expect(fibonacci()[2]).toBe(1);
    });
});
