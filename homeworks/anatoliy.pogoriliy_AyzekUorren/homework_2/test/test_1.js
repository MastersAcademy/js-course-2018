let Pyramid = require('../pyramid');
const assert = require('assert');

describe('Pyramid', () => {
    it('should return null', () => {
        assert.equal(Pyramid(), null);
    });
    it('(1) should return \n####', () => {
        assert.equal(Pyramid(1), '####');
    });
    let firstString = '\xa0####\xa0\n######';
    it('(2) should return\n' + firstString, () => {
        assert.equal(Pyramid(2), firstString);
    });
    let secondString = '\xa0\xa0####\xa0\xa0\n\xa0######\xa0\n########';
    it('(3) should return\n' + secondString, () => {
        assert.equal(Pyramid(3), secondString);
    });
    let thirdString = '\xa0\xa0\xa0####\xa0\xa0\xa0\n\xa0\xa0######\xa0\xa0\n\xa0########\xa0\n##########';
    it('(4) should return\n' + thirdString, () => {
        assert.equal(Pyramid(4), thirdString);
    });
});