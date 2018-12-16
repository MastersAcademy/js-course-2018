jest.mock('./random', () => ({
    random: jest.fn(),
}));

const { task } = require('./task');
const { random } = require('./random');

describe('fibonacci with random limit', () => {
    test('last number in array is 89', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

        random.mockReturnValueOnce(92);

        expect(task()).toEqual(mockResult);
    });

    test('last number in array is 55', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

        random.mockReturnValueOnce(55);

        expect(task()).toEqual(mockResult);
    });
});
