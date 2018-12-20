const { fibonacci } = require('./fibonacci.js');
let { randomNumber } = require('./fibonacci.js');

beforeAll(() => {
    randomNumber = jest.fn();
});

test('First value', () => {
    expect(fibonacci(0)[0]).toBe(0);
});

test('Second value', () => {
    expect(fibonacci(0)[1]).toBe(1);
});

test('is fibonacci sequence equal array with the max range 50', () => {
    const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    randomNumber.mockReturnValue(50);
    expect(fibonacci(randomNumber())).toEqual(array);
});

test('is fibonacci sequence equal array with the max range 100', () => {
    const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    randomNumber.mockReturnValue(100);
    expect(fibonacci(randomNumber())).toEqual(array);
});
