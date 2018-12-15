const fibArr = require('./fibonacci.js');

describe('first element should be 0', () => {
    expect(fibArr()[0]).toBe(0);
});

describe('second element should be 1', () => {
    expect(fibArr()[1]).toBe(1);
});

describe('third element should be 1', () => {
    expect(fibArr()[2]).toBe(1);
});

describe('50 < lastNum < 100', () => {
    expect(fibArr[fibArr.length - 1]).toBeGreaterThan(50);
    expect(fibArr[fibArr.length - 1]).toBeLessThan(100);
});

describe('array really is the Fibonacci sequence', () => {
    for (let i = 2; i < fibArr.length; i++) {
        const result = fibArr[i - 1] + fibArr[i - 2];
        expect(fibArr[i]).toBe(result);
    }
});
