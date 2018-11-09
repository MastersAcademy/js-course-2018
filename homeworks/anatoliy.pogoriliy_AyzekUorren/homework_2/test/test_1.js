const assert = require('assert');
const pyramid = require('../pyramid');

describe('Pyramid', () => {
    it('should return null', () => {
        assert.deepEqual(pyramid(), null);
    });
    it('(1) should return \n####', () => {
        assert.deepEqual(pyramid(1), '####');
    });
    const firstString = '\xa0####\xa0\n######';
    it(`(2) should return\n${firstString}`, () => {
        assert.deepEqual(pyramid(2), firstString);
    });
    const secondString = '\xa0\xa0####\xa0\xa0\n\xa0######\xa0\n########';
    it(`(3) should return\n${secondString}`, () => {
        assert.deepEqual(pyramid(3), secondString);
    });
    const thirdString = '\xa0\xa0\xa0####\xa0\xa0\xa0\n\xa0\xa0######\xa0\xa0\n\xa0########\xa0\n##########';
    it(`(4) should return\n${thirdString}`, () => {
        assert.deepEqual(pyramid(4), thirdString);
    });
});
