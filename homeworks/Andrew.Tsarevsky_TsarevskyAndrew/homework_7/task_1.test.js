const { fibonacci } = require('./task_1');

test('array type check', () => {
    expect(Array.isArray(fibonacci())).toBe(true);
});

test('check first and second elements in array', () => {
    const arr = [0, 1];
    expect(fibonacci()).toEqual(arr);
});

test('fibonacci array test then diapason less 55', () => {
    const less55 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibonacci(54)).toEqual(less55);
});

test('fibonacci array test then diapason from 55 to 89', () => {
    const less89 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibonacci(88)).toEqual(less89);
});

test('fibonacci array test then diapason from 89 to 100', () => {
    const less100 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(fibonacci(99)).toEqual(less100);
});
