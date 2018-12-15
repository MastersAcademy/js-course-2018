const { fibonacci } = require('./homework_7_task_1');

const less55 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
const less89 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const less100 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

describe('fibonacci test', () => {
    test('array check test ', () => {
        expect(Array.isArray(fibonacci())).toBe(true);
    });
    test('first element in array test', () => {
        expect(fibonacci()[0]).toBe(0);
    });
    test('second element in array test', () => {
        expect(fibonacci()[1]).toBe(1);
    });
    test('fibonacci array test < 55', () => {
        if (fibonacci()[fibonacci().length] === 10) {
            expect(fibonacci()).toEqual(less55);
        }
    });
    test('fibonacci array test 55 to 89', () => {
        if (fibonacci()[fibonacci().length] === 11) {
            expect(fibonacci()).toEqual(less89);
        }
    });
    test('fibonacci array test 89 to 100', () => {
        if (fibonacci()[fibonacci().length] === 12) {
            expect(fibonacci()).toEqual(less100);
        }
    });
});
