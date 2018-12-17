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
        for (let i = 0; i < array.length - 1; i++) {
            const cof = parseFloat((array[i] / array[i + 1]).toFixed(3));
            switch (i) {
                case 0:
                    expect(cof).toBe(0);
                    break;
                case 1:
                    expect(cof).toBe(1);
                    break;
                case 2:
                    expect(cof).toBe(0.5);
                    break;
                case 3:
                    expect(cof).toBe(0.667);
                    break;
                case 4:
                    expect(cof).toBe(0.6);
                    break;
                case 5:
                    expect(cof).toBe(0.625);
                    break;
                case 6:
                    expect(cof).toBe(0.615);
                    break;
                case 7:
                    expect(cof).toBe(0.619);
                    break;
                default:
                    expect(cof).toBe(0.618);
                    break;
            }
        }
    });
});
