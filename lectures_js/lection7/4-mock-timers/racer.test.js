const { Racer } = require('./racer');

// describe('without mocking', () => {
//     test('racer test', (done) => {
//         const racer = new Racer();
//         racer.start();
//
//         setTimeout(() => {
//             expect(racer.distance).toBe(10);
//             done();
//         }, 5500);
//     });
// });

// ///////////////////////// THE RIGHT WAY

describe('with mocking', () => {
    jest.useFakeTimers();

    test('racer test', () => {
        const racer = new Racer();
        racer.start();
        jest.advanceTimersByTime(5500);
        expect(racer.distance).toBe(10);
    });
});
