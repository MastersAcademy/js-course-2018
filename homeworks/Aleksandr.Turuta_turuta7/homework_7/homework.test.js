const { fibonacci, cycleAndTest } = require('./homework_7');

describe('test fibonacci', () => {
    test('test fibonacci', () => {
        expect(fibonacci(0)).toBe(0);
    });
});

describe('test fibonacci', () => {
    test('test fibonacci', () => {
        expect(fibonacci(7)).toBe(13);
    });
});
describe('test randum', () => {
    test('test randum', () => {
        expect(cycleAndTest(50)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
describe('test randum', () => {
    test('test fibonacci Number > 0', () => {
        expect(fibonacci(0) >= 0).toBe(true);
    });
});
