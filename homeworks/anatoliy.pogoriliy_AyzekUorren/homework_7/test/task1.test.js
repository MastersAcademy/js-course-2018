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
    describe('Fibonacci array', () => {
        test('array 0 -> 10', () => {
            const generator = new Fibonacci();
            const generatedArray = generator.generateArray(10);
            const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
            expect(generatedArray).toEqual(expect.arrayContaining(expectedResult));
        });
        test('array 0 -> 20', () => {
            const generator = new Fibonacci();
            const generatedArray = generator.generateArray(20);
            const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
                89, 144, 233, 377, 610, 987, 1597, 2584, 4181];
            expect(generatedArray).toEqual(expect.arrayContaining(expectedResult));
        });
    });
    describe('Fibonacci array to maxNumber', () => {
        test('array 0 -> 55', () => {
            const generator = new Fibonacci();
            const generatedArray = generator.gereateArrayToMaxValue(55);
            const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
            expect(generatedArray).toEqual(expect.arrayContaining(expectedResult));
        });
        test('array 0 -> 4181', () => {
            const generator = new Fibonacci();
            const generatedArray = generator.gereateArrayToMaxValue(4181);
            const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
                89, 144, 233, 377, 610, 987, 1597, 2584, 4181];
            expect(generatedArray).toEqual(expect.arrayContaining(expectedResult));
        });
    });
});
