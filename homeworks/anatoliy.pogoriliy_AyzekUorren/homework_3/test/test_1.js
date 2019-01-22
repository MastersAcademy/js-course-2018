const assert = require('assert');
const {
    square,
    createArrayNumbers,
    getArraySquare,
    getSumOfArray,
} = require('../task_1');

describe('Square', () => {
    it('(5) should return 25', () => {
        assert.deepEqual(square(5), 25);
    });
    it('(15) should return 225', () => {
        assert.deepEqual(square(15), 225);
    });
    it('(53) should return 2809', () => {
        assert.deepEqual(square(53), 2809);
    });
});
describe('Array Numbers', () => {
    it('(50, 5) should return equal array', () => {
        assert.deepEqual(createArrayNumbers(50, 5), [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });
    it('(32, 4) should return equal array', () => {
        assert.deepEqual(createArrayNumbers(32, 4), [0, 4, 8, 12, 16, 20, 24, 28, 32]);
    });
});
describe('Array Square', () => {
    it('(createArrayNumbers(32, 4)) should return equal array', () => {
        assert.deepEqual(getArraySquare(createArrayNumbers(32, 4)),
            [0, 16, 64, 144, 256, 400, 576, 784, 1024]);
    });
});
describe('Array Sum', () => {
    it('(getArraySquare(createArrayNumbers(32, 4))) should return 3264', () => {
        assert.deepEqual(getSumOfArray(getArraySquare(createArrayNumbers(32, 4))),
            3264);
    });
});
