let Pyramid = require('../pyramid');
const assert = require('assert');

describe('Pyramid', () => {
    it('should return null', () => {
        assert.deepEqual(Pyramid(), null);
    });
    it('(1) should return \n####', () => {
        assert.deepEqual(Pyramid(1), '####');
    });
    let firstString = '\xa0####\xa0\n######';
    it('(2) should return\n' + firstString, () => {
        assert.deepEqual(Pyramid(2), firstString);
    });
    let secondString = '\xa0\xa0####\xa0\xa0\n\xa0######\xa0\n########';
    it('(3) should return\n' + secondString, () => {
        assert.deepEqual(Pyramid(3), secondString);
    });
    let thirdString = '\xa0\xa0\xa0####\xa0\xa0\xa0\n\xa0\xa0######\xa0\xa0\n\xa0########\xa0\n##########';
    it('(4) should return\n' + thirdString, () => {
        assert.deepEqual(Pyramid(4), thirdString);
    });
});