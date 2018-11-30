const assert = require('assert');
const sum = require('../task').getSumArray;
const countElements = require('../task').getCountElements;
const innerCopy = require('../task').clone;
const { getPeople, getJSONtoObject } = require('../task');

describe('Sum', () => {
    it('([10, -10, 10, -10, 10]) should return [10, 0, 10, 0, 10]', () => {
        assert.deepStrictEqual(sum([10, -10, 10, -10, 10]), [10, 0, 10, 0, 10]);
    });
    it('([0, 0, 0, 0, 0]) should return [0, 0, 0, 0, 0]', () => {
        assert.deepStrictEqual(sum([0, 0, 0, 0, 0]), [0, 0, 0, 0, 0]);
    });
    it('([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]', () => {
        assert.deepStrictEqual(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
    });
});
describe('countElements', () => {
    it('should return\n'
        + '     header: 1\n'
        + '     link: 1\n'
        + '     menu: 4\n'
        + '     menu_item: 3\n'
        + '     tab_item: 2\n'
        + '     tabs: 2', () => {
        assert.deepStrictEqual(countElements(['header', 'menu', 'menu_item', 'tabs',
            'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
            'menu_item', 'menu', 'menu_item']), {
            header: 1,
            link: 1,
            menu: 4,
            menu_item: 3,
            tab_item: 2,
            tabs: 2,
        });
    });
});
describe('InnerCopy', () => {
    it('should return clone object', () => {
        const obj = { b: 'c', getJSONtoConversionObject: { e: 'f' } };
        assert.deepStrictEqual(innerCopy(obj), obj);
    });
});
describe('GetPeople', () => {
    it('should return friend users', () => {
        assert.deepStrictEqual(getPeople(2), [{ id: 1, name: 'Nick', friends: [2, 5, 6] },
            { id: 3, name: 'Mike', friends: [2, 5] }]);
    });
    it('should return null', () => {
        assert.deepStrictEqual(getPeople(4), null);
    });
    it('should return null', () => {
        assert.deepStrictEqual(getPeople(100500), null);
    });
});
describe('Convert JSON to Object', () => {
    it('should return equal array', () => {
        const testArray = [
            {
                Country: 'Afghanistan',
                CountryCode: '93',
                IsoCodes: [
                    {
                        Code: 'AF',
                    },
                    {
                        Code: 'AFG',
                    },
                ],
                Population: '29,121,286',
                AreaKM2: '647,500',
            },
            {
                Country: 'Albania',
                CountryCode: '355',
                IsoCodes: [
                    {
                        Code: 'AL',
                    },
                    {
                        Code: 'ALB',
                    },
                ],
                Population: '2,986,952',
                AreaKM2: '28,748',
            },
            {
                Country: '123asd',
                CountryCode: '355',
                IsoCodes: [
                    {
                        Code: 'AL',
                    },
                    {
                        Code: 'ALB',
                    },
                ],
                Population: '912,986,952',
                AreaKM2: '28,748',
            }];
        const compareArray = [{
            country: '123asd',
            percentValue: 96.60264507324389,
            population: '912,986,952',
        },
        {
            country: 'Afghanistan',
            percentValue: 3.0813071855756666,
            population: '29,121,286',
        },
        {
            country: 'Albania',
            percentValue: 0.3160477411804413,
            population: '2,986,952',
        }];

        const arrayJSON = JSON.stringify(testArray);
        assert.deepStrictEqual(getJSONtoObject(arrayJSON), compareArray);
    });
});
