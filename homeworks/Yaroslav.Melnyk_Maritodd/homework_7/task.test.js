jest.mock('./random', () => ({
    random: jest.fn(),
}));

const { task } = require('./task');
const { random } = require('./random');

describe('fibonacci with random limit', () => {
    test('last number in array is 89', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

        random.mockReturnValueOnce(89);

        expect(task()).toEqual(mockResult);
    });

    test('last number in array is 55', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

        random.mockReturnValueOnce(55);

        expect(task()).toEqual(mockResult);
    });

    test('last number in array is 34', () => {
        const mockResult = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        random.mockReturnValueOnce(34);

        expect(task()).toEqual(mockResult);
    });

    test('Sum of the two previous elements', () => {
        const sum = task();
        for (let i = 2; i <= sum.length; i++) {
            expect(sum[i].toBe(sum[i - 1] + sum[i - 2]));
        }
    });
});
