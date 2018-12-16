const { numFibonachi } = require('./fibonachi.js');
describe('Fibonachi', () => {
    describe('Check the value in a series of numbers', () => {
        test('First value', () => {
            expect(numFibonachi(10)[0]).toBe(0);
        });
        test('Six value', () => {
            expect(numFibonachi(10)[5]).toBe(5);
        });
        test('Ten value', () => {
            expect(numFibonachi()[9]).toBe(34);
        });
    });
});