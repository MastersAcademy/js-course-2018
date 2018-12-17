/* eslint no-underscore-dangle: ["error", { "allow": ["_failStore"] }] */

const login = require('./login');

test('User exist', () => {
    expect(login.login('zayka123', 'qwerty321')).toEqual('success');
});

describe('User don\'t exist', () => {
    test('Throw Error', () => {
        const error = new Error('The system does not have a user registered with this login!');
        expect(() => login.login('zayka', 'veryStrongPassword')).toThrow(error);
    });

    test('User fail login store', () => {
        expect(login._failStore[0]).toEqual({ login: 'zayka', count: 1 });
    });
});

describe('Incorrect password entered blocked the user', () => {
    const userName = 'admin';
    for (let i = 0; i < 3; i++) {
        test(`Incorrect password entered ${i + 1} times`, () => {
            const error = new Error('Incorrect password entered!');
            expect(() => login.login(userName, 'veryStrongPassword')).toThrow(error);
        });

        // const user = login._failStore.filter(obj => obj.login === userName)[0];
        test('User fail login store', () => {
            expect(login._failStore.filter(obj => obj.login === userName)[0]).toEqual({ login: 'admin', count: i + 1 });
        });
    }

    test('First, another user entered an invalid password', () => {
        const error = new Error('Incorrect password entered!');
        expect(() => login.login('kak_bozenka_smolvil', 'StrongPassword')).toThrow(error);
    });

    test('User fail login store', () => {
        expect(login._failStore.filter(obj => obj.login === 'kak_bozenka_smolvil')[0]).toEqual({ login: 'kak_bozenka_smolvil', count: 1 });
    });

    test('Then user enters the correct password immediately after three unsuccessful attempts', () => {
        const error = new Error('Wait 10 seconds before the next login attempt!');
        expect(() => login.login('admin', 'admin')).toThrow(error);
    });

    jest.useFakeTimers();

    test('Then user enters the correct password 10 seconds after three unsuccessful attempts', () => {
        jest.advanceTimersByTime(10500);
        expect(login.login('admin', 'admin')).toEqual('success');
    });

    test('Clear fail user login in store', () => {
        expect(login._failStore.filter(obj => obj.login === userName)[0]).toEqual(undefined);
    });
});
