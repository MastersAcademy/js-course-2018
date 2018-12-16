const file = require('./task_1');

test('fibonacci return array', () => {
    expect(Array.isArray(file.resultFibonacci)).toBeTruthy();
});

test('fibonacci array start from 0', () => {
    expect(file.resultFibonacci[0]).toBe(0);
});

test('fibonacci array element 1', () => {
    expect(file.resultFibonacci[1]).toBe(1);
});

test('fibonacci array correct', () => {
    file.resultFibonacci.forEach((item, index, arr) => {
        if (index > 2) {
            const twoElements = arr[index - 2] + arr[index - 1];
            if (twoElements !== arr[index]) {
                expect(arr[index]).toBe(twoElements);
            }
        }
    });
});

test('fibonacci array finish from 50 to 100', () => {
    expect(file.randomNumber).toBeGreaterThanOrEqual(50);
    expect(file.randomNumber).toBeLessThanOrEqual(100);
});
