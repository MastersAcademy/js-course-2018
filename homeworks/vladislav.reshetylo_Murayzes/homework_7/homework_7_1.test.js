// test

const { phibonachi } = require('./homework_7_1');

test('first element', () => {
    expect(phibonachi()[0]).toBe(0);
});
test('third element', () => {
    expect(phibonachi()[2]).toBe(1);
});
test('element is 7', () => {
    expect(phibonachi()[6]).toBe(8);
});
