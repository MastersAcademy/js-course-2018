const fiboNum = require('./task_7.1');

test('checks arrays type', () => {
    expect(Array.isArray(fiboNum())).toBe(true);
});
test('is first number equal 0', () => {
    const array = fiboNum(50);
    expect(array[0]).toBe(0);
});
test('is array length greater or equal 10', () => {
    const array = fiboNum(50);
    expect(array.length).toBeGreaterThanOrEqual(10);
});
test('is array length greater or equal 12', () => {
    const array = fiboNum(100);
    expect(array.length).toEqual(12);
});
test('is fiboNum50 equal arrayNum50', () => {
    const arrayNum50 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fiboNum(50)).toEqual(arrayNum50);
});
test('is fiboNum100 equal arrayNum100', () => {
    const arrayNum100 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    expect(fiboNum(100)).toEqual(arrayNum100);
});
