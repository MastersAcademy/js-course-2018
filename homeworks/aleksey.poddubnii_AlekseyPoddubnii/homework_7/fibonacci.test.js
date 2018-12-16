const { fibonacci, rand } = require('./fibonacci.js');

test('comming data is array', () => {
    expect(Array.isArray(fibonacci())).toBe(true);
});

test('random num not biggest than 11 (only from 11 to 0)', () => {
    expect(rand(11, 10)).toBeLessThanOrEqual(11);
});

test('start from zero', () => {
    expect(fibonacci()[0]).toBe(0);
});

test('second num', () => {
    expect(fibonacci()[1]).toBe(1);
});

test('array less o equal 55', () => {
    const than55 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibonacci(10)).toEqual(than55);
});

test('if array biggest less 55', () => {
    const than89 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(fibonacci(11)).toEqual(than89);
});
