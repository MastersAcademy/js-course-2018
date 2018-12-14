const getFibonacciSequence = require('./task_01_fibonacci');

const RANDOM = {
    MIN: 0,
    MAX: 1 - Number.EPSILON,
};

describe('Fibonacci seqence test', () => {
    test('First element is 0', () => {
        expect(getFibonacciSequence()[0]).toBe(0);
    });
    test('Second element is 1', () => {
        expect(getFibonacciSequence()[1]).toBe(1);
    });
    test('Fibonacci sequence is correct', () => {
        const testSequence = getFibonacciSequence();
        expect(testSequence.length).toBeGreaterThan(2);

        for (let i = 2; i < testSequence.length; i++) {
            expect(testSequence[i - 2] + testSequence[i - 1]).toBe(testSequence[i]);
        }
    });
});

describe('Random seqence test', () => {
    beforeAll(() => {
        // eslint-disable-next-line no-extend-native
        Math.random = jest.fn();
        Math.random.mockReturnValue(RANDOM.MAX);
    });
    afterAll(() => {
        Math.random.mockClear();
    });
    test('Last element of the largest sequence is 89', () => {
        expect(getFibonacciSequence().pop()).toBe(89);
    });
    test('Last element of the smallest sequence is 34', () => {
        Math.random.mockReturnValueOnce(RANDOM.MIN);
        expect(getFibonacciSequence().pop()).toBe(34);
    });
});
