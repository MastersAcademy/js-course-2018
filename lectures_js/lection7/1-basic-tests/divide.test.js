const { divide, asyncDivide } = require('./divide');

describe('Sync test', () => {
    test('4 / 2 is equal 2', () => {
        expect(divide(4, 2)).toBe(2);
    });

    // test('4 / 3 is equal 5', () => {
    //     expect(divide(4, 3)).toBe(5)
    // });

    test('dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow();
    });
});


// /////////// async tests

describe('Async tests', () => {
    test('4 / 2 is equal 2', () => {
        expect(asyncDivide(4, 2)).resolves.toBe(2);
    });

    test('dividing by zero', () => {
        const error = Error('You can`t divide by zero');
        expect(asyncDivide(10, 0)).rejects.toEqual(error);
    });
});
