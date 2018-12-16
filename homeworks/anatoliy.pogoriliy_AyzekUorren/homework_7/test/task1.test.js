const Fibonacci = require('../task1');

describe('Fibonacci', () => {
    describe('generate', () => {
        test('generates 0', () => {
            const generator = new Fibonacci();
            const generated = generator.generate(0);
            expect(generated).toBe(0);
        });
        test('generates 1', () => {
            const generator = new Fibonacci();
            const generated = generator.generate(1);
            expect(generated).toBe(1);
        });
        test('generates a large number 7', () => {
            const generator = new Fibonacci();
            const generated = generator.generate(7);
            expect(generated).toBe(13);
        });
        test('generates a large number 20', () => {
            const generator = new Fibonacci();
            const generated = generator.generate(20);
            expect(generated).toBe(6765);
        });
    });
});
