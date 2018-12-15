function fiboSequence() {
    const fibo = [0, 1];
    const randNumFrom50To100 = Math.floor(Math.random() * 51) + 50;
    while (fibo[fibo.length - 1] + fibo[fibo.length - 2] < randNumFrom50To100) {
        const next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
        fibo.push(next);
    }
    fibo.push(randNumFrom50To100);
    return fibo;
}

const trueFibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
describe('Fibo sequence ended by a random integer from 50 to 100 inclusive:', () => {
    const result = fiboSequence();
    test('First value should be 0', () => {
        expect(result[0]).toEqual(0);
    });
    test('Final (random) value should be >=50 and <=100', () => {
        expect(result[result.length - 1]).toBeGreaterThanOrEqual(50);
        expect(result[result.length - 1]).toBeLessThanOrEqual(100);
    });

    test('Sequence besides the last value should be a valid Fibo sequence', () => {
        expect(trueFibo.join('')).toContain(fiboSequence().join('').substring(0, fiboSequence.length - 1));
    });
});
