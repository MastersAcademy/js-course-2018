const { fibNumbers } = require('./task1.js');

test('checks arrays type', () => {
    expect(Array.isArray(fibNumbers())).toBe(true);
});

test('is first number equal 0', () => {
    const array = fibNumbers(50, 1);
    expect(array[0]).toBe(0);
});

test('is fibNumbers50 equal arrayNumbers50', () => {
    const arrayNumbers50 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibNumbers(50, 10)).toEqual(arrayNumbers50);
});

test('is fibNumbers100 equal arrayNumbers100', () => {
    const arrayNumbers100 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(fibNumbers(100, 12)).toEqual(arrayNumbers100);
});
