const { cycleAndTest } = require('./homework_7');

describe('test fibonacci', () => {
    test('test fibonacci', () => {
        expect(cycleAndTest(0)).toEqual([]);
    });
});

describe('test fibonacci', () => {
    test('test fibonacci', () => {
        expect(cycleAndTest(1)).toEqual([0]);
    });
});

describe('test fibonacci', () => {
    test('test fibonacci', () => {
        expect(cycleAndTest(2)).toEqual([0, 1, 1]);
    });
});
