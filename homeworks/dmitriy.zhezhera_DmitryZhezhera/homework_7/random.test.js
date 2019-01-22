const random = require('./random.js');

test('test1 random 20-40', () => {
    expect(random(20, 40)).toBeGreaterThanOrEqual(20);
});

test('test2 random 20-40', () => {
    expect(random(20, 40)).toBeLessThanOrEqual(40);
});


test('test2 random 60-80', () => {
    expect(random(60, 80)).toBeGreaterThanOrEqual(60);
});

test('test2 random 60-80', () => {
    expect(random(60, 80)).toBeLessThanOrEqual(80);
});

test('test3 random 25-25', () => {
    expect(random(25, 25)).toBe(25);
});

test('test4 random -25- -25', () => {
    expect(random(-25, -25)).toBe(-25);
});
