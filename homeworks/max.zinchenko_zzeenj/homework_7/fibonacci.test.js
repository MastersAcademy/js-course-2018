const { fibonacci } = require('./fibonacci.js');

describe('Fibonacci', () => {
    const value = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    test('must contain "value" array on it', () => {
        expect(fibonacci()).toEqual(
            expect.arrayContaining(value),
        );
    });
});
