const { getFibSequence, getRandomNumberInRange } = require('./task_1');

describe('Testing function getFibSequence() which must return a fibonacci sequence array.', () => {
    test('Result is an array.', () => {
        expect(getFibSequence(0)).toEqual(expect.any(Array));
    });

    test('Result array starts from "0".', () => {
        expect(getFibSequence(0)[0]).toBe(0);
    });

    test('The second value in the result array is "1".', () => {
        expect(getFibSequence(1)[1]).toBe(1);
    });

    test('There is the sequence in result array (0,1,1,2,3,5,8,13,21,34).', () => {
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        expect(getFibSequence(34)).toEqual(expect.arrayContaining(expected));
    });

    test('Last num of result array for argument "100" is "89".', () => {
        const returnedVal = getFibSequence(100);
        expect(returnedVal[returnedVal.length - 1]).toBe(89);
    });
});

describe('Testing function getRandomNumberInRange() which must return a random number from setted range.', () => {
    Math.random = jest.fn();
    test('Func getRandomNumberInRange() is working.', () => {
        Math.random.mockReturnValue(0.01);
        expect(getRandomNumberInRange(10, 20)).toEqual(expect.any(Number));
    });
    test('Func getRandomNumberInRange() returns 0 for arguments (0,0).', () => {
        Math.random.mockReturnValue(0.01); //
        expect(getRandomNumberInRange(0, 0)).toBe(0);
    });
    //  if i'm using mockReturnValueOnce the jest aren't responding during testing
    test('getRandomNumberInRange() with args (0,100) returns "1" when Math.random() returns "0.01".', () => {
        Math.random.mockReturnValue(0.01);
        expect(getRandomNumberInRange(0, 100)).toBe(1);
    });
    test('getRandomNumberInRange() with args (0,100) returns "2" when Math.random() returns "0.02".', () => {
        Math.random.mockReturnValue(0.02);
        expect(getRandomNumberInRange(0, 100)).toBe(2);
    });
    test('getRandomNumberInRange() with args (0,100) returns "50" when Math.random() returns "0.5".', () => {
        Math.random.mockReturnValue(0.5);
        expect(getRandomNumberInRange(0, 100)).toBe(50);
    });
    test('getRandomNumberInRange() with args (0,100) returns "100" when Math.random() returns "1".', () => {
        Math.random.mockReturnValue(1);
        expect(getRandomNumberInRange(0, 100)).toBe(100);
    });
});
