const Login = require('./task_02_login');

describe('Login test', () => {
    describe('Method and arguments', () => {
        test('Object has "login" property', () => {
            expect(new Login()).toHaveProperty('login');
        });
        test('"login" property is a method', () => {
            expect(typeof (new Login().login)).toBe('function');
        });
        test('Method returns an error when called with less than 2 arguments', () => {
            expect(new Login().login()).not.toBe('success');
            expect(new Login().login('admin')).not.toBe('success');
        });
    });

    describe('Login and password', () => {
        test('Returns an error when password is wrong or empty', () => {
            expect(new Login().login('admin', '')).not.toBe('success');
            expect(new Login().login('admin', 'Admin')).not.toBe('success');
        });
        test('Returns an error when name is wrong or empty', () => {
            expect(new Login().login('', 'admin')).not.toBe('success');
            expect(new Login().login('!@#$%_(*&^', 'admin')).not.toBe('success');
        });
        test('Returns "success" when called with proper name (admin) and password (admin)', () => {
            expect(new Login().login('admin', 'admin')).toBe('success');
        });
    });

    describe('Login locking', () => {
        beforeAll(() => {
            jest.useFakeTimers();
        });
        test('Login is locked if failed more than 3 times', () => {
            const login = new Login();
            expect(login.login('admin', 'qwe')).not.toBe('success');
            expect(login.login('admin', '123')).not.toBe('success');
            expect(login.login('admin', 'asdf')).not.toBe('success');
            expect(login.login('admin', '321')).not.toBe('success');
            expect(login.login('admin', 'admin')).not.toBe('success');
        });
        test('Login is locked only for a certain user', () => {
            const login = new Login();
            expect(login.login('admin', 'qwe')).not.toBe('success');
            expect(login.login('admin', '123')).not.toBe('success');
            expect(login.login('admin', 'asdf')).not.toBe('success');
            expect(login.login('admin', '321')).not.toBe('success');
            expect(login.login('admin', 'admin')).not.toBe('success');
            expect(login.login('zayka123', 'qwerty321')).toBe('success');
        });
        test('Login becomes available after 10 seconds', () => {
            const login = new Login();
            expect(login.login('admin', 'qwe')).not.toBe('success');
            expect(login.login('admin', '123')).not.toBe('success');
            expect(login.login('admin', 'asdf')).not.toBe('success');
            expect(login.login('admin', '321')).not.toBe('success');
            expect(login.login('admin', 'admin')).not.toBe('success');
            jest.advanceTimersByTime(9500);
            expect(login.login('admin', 'admin')).not.toBe('success');
            jest.advanceTimersByTime(1000);
            expect(login.login('admin', 'admin')).toBe('success');
        });
    });
});
