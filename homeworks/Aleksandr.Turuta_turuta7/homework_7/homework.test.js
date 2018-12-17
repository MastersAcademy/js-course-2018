const { makeFiboArr } = require('./homework_7');

describe('Test funcltion "makeFiboArr", function supposed to return an array', () => {
    test('0 index element of returned array should be 0', () => {
        expect(makeFiboArr()[0]).toBe(0);
    });

    test('2 index element of returned array should be 1', () => {
        expect(makeFiboArr()[2]).toBe(1);
    });

    test('for index 2 and higher, elements of returned array should be the sum of previous two elements', () => {
        expect(makeFiboArr()[7]).toEqual(13);
    });

    test('if there is no function value, the array will return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
        expect(makeFiboArr()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
