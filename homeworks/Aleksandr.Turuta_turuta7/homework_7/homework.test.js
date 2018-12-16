const { makeFiboArr } = require('./homework_7');

describe('Test funcltion "makeFiboArr", function supposed to return an array', () => {
    test('returned empty array', () => {
        expect(makeFiboArr(0)).toEqual([]);
    });

    test('1 index element of returned array should be 0', () => {
        expect(makeFiboArr(1)).toEqual([0]);
    });

    test('for index 2 and higher, elements of returned array should be the sum of previous two elements', () => {
        expect(makeFiboArr(2)).toEqual([0, 1, 1]);
    });

    test('if there is no function value, the array will return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
        expect(makeFiboArr()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
