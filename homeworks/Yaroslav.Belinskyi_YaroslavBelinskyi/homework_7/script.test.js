const { fibonacci, randomEndValue } = require('./script.js');

describe('Test for fibonacci', () => {
    test('Check that the output is array', () => {
        expect(Array.isArray(fibonacci())).toBeTruthy();
    });
    test('Check that the end of array is in range of 50-100', () => {
        expect(randomEndValue()).toBeLessThanOrEqual(100);
        expect(randomEndValue()).toBeGreaterThanOrEqual(50);
    });
    test('Check that array is not empty', () => {
        expect(fibonacci().length > 0).toBeTruthy();
    });
    test('Check that the first number is "0" and second one is "1"', () => {
        expect(fibonacci()[0]).toBe(0);
        expect(fibonacci()[1]).toBe(1);
    });
    test('Check that the last number is less or equal to the end of array', () => {
        const endOfArray = randomEndValue();
        const lastNumber = fibonacci()[fibonacci().length - 1];
        expect(lastNumber <= endOfArray);
    });
    test('Check that the array is Fibonacci sequence', () => {
        const array = fibonacci();
        const a = array[array.length - 1];
        const b = array[array.length - 2];
        const c = array[array.length - 3];
        const cof1 = (b / a).toFixed(3);
        const cof2 = (c / a).toFixed(3);
        expect(cof1).toBe('0.618');
        expect(cof2).toBe('0.382');
    });
});
