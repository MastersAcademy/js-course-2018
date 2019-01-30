const { fibonacci } = require('./fibonacci.js');
let { getRandomInteger } = require('./fibonacci.js');

describe('Array of fibonacci is right', () => {
    beforeAll(() => {
        getRandomInteger = jest.fn();
    });

    test('When last num is 34', () => {
        const value = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        getRandomInteger.mockReturnValue(41);
        expect(fibonacci(getRandomInteger())).toEqual(value);
    });

    test('When last num is 55', () => {
        const value = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        getRandomInteger.mockReturnValue(56);
        expect(fibonacci(getRandomInteger())).toEqual(value);
    });

    test('When last num is 89', () => {
        const value = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        getRandomInteger.mockReturnValue(90);
        expect(fibonacci(getRandomInteger())).toEqual(value);
    });
});
