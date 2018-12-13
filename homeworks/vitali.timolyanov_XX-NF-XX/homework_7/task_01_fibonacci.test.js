const getFibonacciSequence = require('./task_01_fibonacci');

const RANDOM = {
    MIN: 0,
    MAX: 1 - Number.EPSILON,
};

describe('Fibonacci test', () => {
    beforeAll(() => {
        // eslint-disable-next-line no-extend-native
        Math.random = jest.fn();
        Math.random.mockReturnValue(RANDOM.MAX);
    });

    test('Returns an array', () => {
        expect(Array.isArray(getFibonacciSequence())).toBeTruthy();
    });
    test('Array is not empty', () => {
        expect(getFibonacciSequence()).not.toHaveLength(0);
    });
    test('First element is 0', () => {
        expect(getFibonacciSequence()[0]).toBe(0);
    });
    test('Second element is 1', () => {
        expect(getFibonacciSequence()[1]).toBe(1);
    });
    test(`Last element is 89 if random() returns ${RANDOM.MAX}`, () => {
        expect(getFibonacciSequence().pop()).toBe(89);
    });
    test(`Last element is 34 if random() returns ${RANDOM.MIN}`, () => {
        Math.random.mockReturnValueOnce(RANDOM.MIN);
        expect(getFibonacciSequence().pop()).toBe(34);
    });
    test('Array contains proper fibonacci sequence', () => {
        const testSequence = getFibonacciSequence();
        let isFibonacciSequence = true;

        for (let i = 2; i < testSequence.length; i++) {
            if (testSequence[i - 2] + testSequence[i - 1] !== testSequence[i]) {
                isFibonacciSequence = false;
                break;
            }
        }
        expect(isFibonacciSequence).toBeTruthy();
    });
});
