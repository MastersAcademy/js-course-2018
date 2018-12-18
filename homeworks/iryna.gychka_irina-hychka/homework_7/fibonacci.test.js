const fibonacciInRange = require('./fibonacci');

test('checks arrays type', () => {
    expect(Array.isArray(fibonacciInRange())).toBe(true);
});

test('is function returns a value', () => {
    expect(fibonacciInRange()).toBeTruthy();
});

test('is array not empty', () => {
    const a = fibonacciInRange(50);
    expect(a.length).toBeGreaterThan(0);
});

test('is array length greater or equal 10', () => {
    const a = fibonacciInRange(50);
    expect(a.length).toBeGreaterThanOrEqual(10);
});

test('is first number equal 0', () => {
    const a = fibonacciInRange(50);
    expect(a[0]).toBe(0);
});

test('is second number equal 1', () => {
    const a = fibonacciInRange(50);
    expect(a[1]).toBe(1);
});

test('is fifth number equal 3', () => {
    const a = fibonacciInRange(50);
    expect(a[4]).toBe(3);
});

test('is tenth number equal 34', () => {
    const a = fibonacciInRange(50);
    expect(a[9]).toBe(34);
});

test('is last number greater than 30', () => {
    const a = fibonacciInRange(50);
    expect(a[a.length - 1]).toBeGreaterThan(30);
});

test('is last number less than 100', () => {
    const a = fibonacciInRange(50);
    expect(a[a.length - 1]).toBeLessThan(100);
});
