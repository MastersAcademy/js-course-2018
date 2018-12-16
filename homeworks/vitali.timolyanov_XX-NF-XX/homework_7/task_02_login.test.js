const Login = require('./task_02_login');

const testLogins = [{
    login: 'test',
    password: '123',
}, {
    login: 'user',
    password: '321',
}];

describe('User existence method', () => {
    const login = new Login();
    login.logins = testLogins;
    test('Returns true when user exists', () => {
        expect(login.isUserExists(testLogins[0].login)).toBeTruthy();
    });
    test('Returns false when user does not exist', () => {
        expect(login.isUserExists('')).toBeFalsy();
    });
});

describe('Password correctness method', () => {
    const login = new Login();
    login.logins = testLogins;
    test('Returns true when password is correct', () => {
        expect(login.isPasswordCorrect(testLogins[0].login, testLogins[0].password)).toBeTruthy();
    });
    test('Returns false when password is wrong', () => {
        expect(login.isPasswordCorrect(testLogins[0].login, '')).toBeFalsy();
        expect(login.isPasswordCorrect(testLogins[0].login, '0A0')).toBeFalsy();
    });
});

describe('Login method', () => {
    const login = new Login();
    login.logins = testLogins;
    test('Returns "success" when login/password is correct', () => {
        expect(login.login(testLogins[0].login, testLogins[0].password)).toBe('success');
    });
    test('Returns an error when login/password is not correct', () => {
        expect(login.login('', testLogins[0].password)).not.toBe('success');
        expect(login.login(testLogins[0].login, '')).not.toBe('success');
    });
});

describe('Login locking', () => {
    const login = new Login();
    login.logins = testLogins;

    beforeAll(() => {
        jest.useFakeTimers();
    });
    test('Login is locked if failed more than 3 times', () => {
        for (let i = 0; i <= 3; i++) {
            expect(login.login(testLogins[0].login, '')).not.toBe('success');
        }
        expect(login.login(testLogins[0].login, testLogins[0].password)).not.toBe('success');
    });
    test('Login is not locked for another user', () => {
        expect(login.login(testLogins[1].login, testLogins[1].password)).toBe('success');
    });
    test('Login becomes available after 10 seconds', () => {
        jest.advanceTimersByTime(9500);
        expect(login.login(testLogins[0].login, testLogins[0].password)).not.toBe('success');
        jest.advanceTimersByTime(1000);
        expect(login.login(testLogins[0].login, testLogins[0].password)).toBe('success');
    });
});
