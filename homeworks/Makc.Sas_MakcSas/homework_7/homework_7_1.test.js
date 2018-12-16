const { fibonacci } = require('./homework_7_1');

describe('test numbers fibonacci_1', () => {
    test('test numbers fibonacci_1', () => {
        expect(fibonacci(0)).toBe(0);
    });
});
describe('test numbers fibonacci_2', () => {
    test('test numbers fibonacci_2', () => {
        expect(fibonacci(5)).toBe(10);
    });
});
describe('test numbers fibonacci_3', () => {
    test('test numbers fibonacci_3', () => {
        expect(fibonacci(0) >= 0).toBe(true);
    });
});
