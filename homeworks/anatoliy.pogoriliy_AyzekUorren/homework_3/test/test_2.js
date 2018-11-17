const assert = require('assert');
const getArrayPowerOfTwo = require('../arrayPowerOfTwo');

describe('Array Power Of Two', () => {
    it('(10, 600) should return equal Array', () => {
        assert.deepEqual(getArrayPowerOfTwo(10, 600), [16, 32, 64, 128, 256, 512]);
    });
});
