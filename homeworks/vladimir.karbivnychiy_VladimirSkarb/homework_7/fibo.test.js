const { fiboNumb } = require('./fibo');

describe('Fibonacci', () => {
    describe('test fibonacci', () => {
        test('test fibonacci', () => {
            expect(fiboNumb(10)[0]).toBe(0);
        });
        test('test fibonacci', () => {
            expect(fiboNumb(10)[5]).toBe(5);
        });
        test('test fibonacci', () => {
            expect(fiboNumb()[8]).toBe(26);
        });
    });
});
