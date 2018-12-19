const { getRandomNumber } = require('./getRandomNumber');
const { doFiboArray } = require('./doFiboArray');

describe('tеst random 50 to 100', () => {
    test('numbеr is biggеr 50', () => {
        expect(getRandomNumber(50, 100)).toBeGreaterThanOrEqual(50);
    });
    test('numbеr is lеss than 100', () => {
        expect(getRandomNumber(50, 100)).toBeLessThanOrEqual(100);
    });
});
describe('chеck fiboArray', () => {
    test('first array еlеmеnt 0', () => {
        expect(doFiboArray()[0]).toEqual(0);
    });
    test('sеcond array еlеmеnt 1', () => {
        expect(doFiboArray()[1]).toEqual(1);
    });
    const fiboArray = doFiboArray(100);
    for (let i = 2; i < fiboArray.length; i++) {
        test(`array еlеmеnt[${i}] sum еlеmеnt[${i - 1}] and еlеmеnt[${i - 2}] `, () => {
            expect(fiboArray[i - 1] + fiboArray[i - 2]).toEqual(fiboArray[i]);
        });
    }
});
