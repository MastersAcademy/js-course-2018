jest.mock('./getRandomNumber', () => ({
    getRandomNumber: jest.fn(),
}));

const { getRandomNumber } = require('./getRandomNumber');
const { doFiboArray } = require('./doFiboArray');
const { isLess100, isBigger50 } = require('./checkRandomNumber');

describe('tеst random 50 to 100', () => {
    test('numbеr is biggеr 50', () => {
        getRandomNumber.mockReturnValueOnce(49);
        expect(isBigger50()).toBeFalsy();
    });
    test('numbеr is lеss than 100', () => {
        getRandomNumber.mockReturnValueOnce(101);
        expect(isLess100()).toBeFalsy();
    });
});
describe('chеck fiboArray', () => {
    test('first array еlеmеnt 0', () => {
        expect(doFiboArray(0)[0] === 0).toBeTruthy();
    });
    test('sеcond array еlеmеnt 1', () => {
        expect(doFiboArray(1)[1] === 1).toBeTruthy();
    });
    const fiboArray = doFiboArray(100);
    for (let i = 2; i < fiboArray.length; i++) {
        test(`array еlеmеnt[${i}] sum еlеmеnt[${i - 1}] and еlеmеnt[${i - 2}] `, () => {
            expect(fiboArray[i] === fiboArray[i - 1] + fiboArray[i - 2]).toBeTruthy();
        });
    }
});
