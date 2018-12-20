const file = require('./task_1');

const { resultFibonacci, randomNumber } = file;

test('fibonacci return array', () => {
    expect(Array.isArray(resultFibonacci)).toBeTruthy();
});

test('fibonacci array start from 0', () => {
    expect(resultFibonacci[0]).toBe(0);
});

test('fibonacci array element 1', () => {
    expect(resultFibonacci[1]).toBe(1);
});

test('fibonacci array correct', () => {
    resultFibonacci.forEach((item, index, arr) => {
        if (index > 2) {
            const twoElements = arr[index - 2] + arr[index - 1];
            if (twoElements !== arr[index]) {
                expect(arr[index]).toBe(twoElements);
            }
        }
    });
});

test('fibonacci array finish from 50 to 100', () => {
    expect(randomNumber).toBeGreaterThanOrEqual(50);
    expect(randomNumber).toBeLessThanOrEqual(100);
});
