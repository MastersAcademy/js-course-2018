const { nowIsTuesday } = require('./tuesday-detector');

// describe('test function without mocking', () => {
//     test('Today is tuesday', expect(nowIsTuesday()).toBeTruthy);
//
//     test('Today is not tuesday', () => {
//         // ?????????????????????????????
//     });
// });


// //////////////////////////////////////// THE RIGHT WAY

const DAYS = {
    TUESDAY: 1,
    FRIDAY: 4,
};

describe('test function with mocking', () => {
    beforeAll(() => {
        // Зміна готових прототипів класів це погано, але для тестів це може бути корисним
        // eslint-disable-next-line no-extend-native
        Date.prototype.getDay = jest.fn();
    });

    test('Today is tuesday', () => {
        Date.prototype.getDay.mockReturnValueOnce(DAYS.TUESDAY);
        expect(nowIsTuesday()).toBeTruthy();
    });

    test('Today is not tuesday', () => {
        Date.prototype.getDay.mockReturnValueOnce(DAYS.FRIDAY);
        expect(nowIsTuesday()).toBeFalsy();
    });
});
