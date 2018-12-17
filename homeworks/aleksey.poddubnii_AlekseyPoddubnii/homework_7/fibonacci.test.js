const { fibonacci } = require('./fibonacci.js');
let { rand } = require('./fibonacci.js');

describe('Testing changes of random values beetween 10 - 11', () => {
    rand = jest.fn();

    test('Last is 55', () => {
        const data = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        rand.mockReturnValue(10);
        expect(fibonacci(rand())).toEqual(data);
    });

    test('Last is 89', () => {
        const data = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        rand.mockReturnValue(11);
        expect(fibonacci(rand())).toEqual(data);
    });

    test('random num not biggest than 11 (only from 11 to 0)', () => {
        expect(rand(11, 10)).toBeLessThanOrEqual(11);
    });
});

describe('Testing array', () => {
    test('comming data is array', () => {
        expect(Array.isArray(fibonacci())).toBe(true);
    });

    test('second num', () => {
        expect(fibonacci()[1]).toBe(1);
    });

    test('array less or equal 55', () => {
        const than55 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        expect(fibonacci(10)).toEqual(than55);
    });

    test('if array less or equal 89', () => {
        const than89 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        expect(fibonacci(11)).toEqual(than89);
    });
});
