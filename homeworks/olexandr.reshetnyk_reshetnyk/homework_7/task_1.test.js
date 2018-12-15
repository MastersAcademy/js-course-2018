const { getFibSequence } = require('./task_1');

describe('testing function getFibSequence which must return a fibonacci sequence array', () => {
    test('Result is an array.', () => {
        expect(getFibSequence()).toEqual(expect.any(Array));
    });

    test('Result array starts from "0".', () => {
        expect(getFibSequence()[0]).toEqual(0);
    });

    test('The second value in the result array is "1".', () => {
        expect(getFibSequence()[1]).toEqual(1);
    });

    test('There is the sequence in result array (0,1,1,2,3,5,8,13,21,34).', () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        expect(getFibSequence()).toEqual(expect.arrayContaining(expected));
    });

    test('Last num of result array is in the range from "50" to "100".', () => {
        const funcRes = getFibSequence();
        expect(funcRes[funcRes.length - 1]).toBeGreaterThanOrEqual(50);
        expect(funcRes[funcRes.length - 1]).toBeLessThanOrEqual(100);
    });
});
