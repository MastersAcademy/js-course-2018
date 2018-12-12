// const { veryDifficultFunction } = require('./module-with-dependencies');
//
// describe('without mocking', () => {
//     test('Number is bigger than 10', expect(veryDifficultFunction()).toBeTruthy);
//
//     test('Number is less than 10', expect(veryDifficultFunction()).toBeFalsy);
// });


// //////////////////////////////////////// THE RIGHT WAY

jest.mock('./some-dependency', () => ({
    getRandomNumber: jest.fn(),
}));
const { getRandomNumber } = require('./some-dependency');

const { veryDifficultFunction } = require('./module-with-dependencies');

describe('with mocking', () => {
    test('Number is bigger than 10', () => {
        getRandomNumber.mockReturnValueOnce(15);
        expect(veryDifficultFunction()).toBeTruthy();
    });

    test('Number is less than 10', () => {
        getRandomNumber.mockReturnValueOnce(10);
        expect(veryDifficultFunction()).toBeFalsy();
    });
});
