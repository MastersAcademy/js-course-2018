jest.mock('./randomNumber', () => ({
    randomNumber: jest.fn(),
}));

const { fibonacci } = require('./fibonacci');
const { randomNumber } = require('./randomNumber');

describe('fibonacci with random limit', () => {
    test('last number in array is 89', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

        randomNumber.mockReturnValueOnce(92);

        expect(fibonacci()).toEqual(mockResult);
    });

    test('last number in array is 55', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

        randomNumber.mockReturnValueOnce(55);

        expect(fibonacci()).toEqual(mockResult);
    });

    test('last number in array is 34', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        randomNumber.mockReturnValueOnce(54);

        expect(fibonacci()).toEqual(mockResult);
    });
});
