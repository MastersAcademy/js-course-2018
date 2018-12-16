jest.mock('./randomizer', () => ({
    getRandomNumber: jest.fn(),
}));

const { getRandomNumber } = require('./randomizer');

const { getRandomFibonacci } = require('./fibonacci');

test('checks first element is 0', () => {
    const fibonacciArr = getRandomFibonacci();
    expect(fibonacciArr[0]).toBe(0);
});

test('checks second element is 1', () => {
    const fibonacciArr = getRandomFibonacci();
    expect(fibonacciArr[1]).toBe(1);
});

test('last element less than MAX', () => {
    getRandomNumber.mockReturnValueOnce(67);
    const fibonacciArr = getRandomFibonacci();
    expect(fibonacciArr[fibonacciArr.length - 1]).toBeLessThan(67);
});

test('check element equals previous + before previous', () => {
    const elemToCheck = getRandomFibonacci().slice(2);
    const notFib = elemToCheck.find((value, key, arr) => value !== arr[key - 1] + arr[key - 2]);
    expect(notFib).toBeUndefined();
});
