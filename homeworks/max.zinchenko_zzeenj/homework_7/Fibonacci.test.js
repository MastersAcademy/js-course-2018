const { fibonacci } = require('./Fibonacci.js');

console.log(fibonacci());

describe('Fibonacci', () => {
    const value = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    test('contain "value" array on it', () => {
        expect(fibonacci()).toEqual(
            expect.arrayContaining(value),
        );
    });
});

describe('Fibonacci', () => {
    test('1st element in fibo === 0', () => {
        expect(fibonacci()[0]).toBe(0);
    });
});

describe('Fibonacci', () => {
    test('2nd element in fibo === 1', () => {
        expect(fibonacci()[1]).toBe(1);
    });
});

describe('Fibonacci', () => {
    test('3rd element in fibo === 1', () => {
        expect(fibonacci()[2]).toBe(1);
    });
});

describe('Fibonacci', () => {
    test('2nd element in fibo === 1', () => {
        expect(fibonacci()[1]).toBe(1);
    });
});

describe('Fibonacci', () => {
    test('8th element in fibo === 13', () => {
        expect(fibonacci()[7]).toBe(13);
    });
});

// last element of fibonacci

describe('Fibonacci', () => {
    test('last element === 55', () => {
        expect(fibonacci()[fibonacci().length - 1]).toBe(55);
    });
});

describe('Fibonacci', () => {
    test('last element === 89', () => {
        expect(fibonacci()[fibonacci().length - 1]).toBe(89);
    });
});

describe('Fibonacci', () => {
    test('last element === 144', () => {
        expect(fibonacci()[fibonacci().length - 1]).toBe(144);
    });
});

// last element of FAKE fibonacci

describe('Fibonacci', () => {
    const last55 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    test('FAKE last element === 55', () => {
        expect(last55[last55.length - 1]).toBe(55);
    });
});

describe('Fibonacci', () => {
    const last89 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    test('FAKE last element === 89', () => {
        expect(last89[last89.length - 1]).toBe(89);
    });
});

describe('Fibonacci', () => {
    const last144 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    test('FAKE last element === 144', () => {
        expect(last144[last144.length - 1]).toBe(144);
    });
});
