const { fibanacci, randomMaxNumber } = require('./fibonacci.js');

describe('find random number', () => {
    test('number less than 100', () => {
        expect(randomMaxNumber()).toBeLessThan(100);
    });
    test('number bigger than 50', () => {
        expect(randomMaxNumber()).toBeGreaterThan(49);
    });
});

test('check first number', () => {
    expect(fibanacci()[0]).toBe(0);
});

describe('test function with mocking', () => {
    const finishNum = jest.fn();

    test('arr is fibonacci`s arr with finishNumber 8', () => {
        finishNum.mockReturnValue(8);
        expect(fibanacci(finishNum())).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });
    test('arr is fibonacci`s arr with finishNumber 40', () => {
        finishNum.mockReturnValue(40);
        expect(fibanacci(finishNum())).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
