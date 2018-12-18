const OAuth = require('../task2');

describe('OAuth', () => {
    test('signIn', () => {
        const oauth = new OAuth();
        const login = 'admin';
        const password = 'admin';
        expect.assertions(1);
        return expect(oauth.signIn(login, password)).toEqual('success');
    });
    test('signIn fail', () => {
        const oauth = new OAuth();
        const login = 'adminFake';
        const password = 'admin';
        try {
            oauth.signIn(login, password);
        } catch (e) {
            expect(e).toEqual(new Error('User not exists, please use different credentials'));
        }
    });
    test('signIn wrong passwrod', async () => {
        const oauth = new OAuth();
        const login = 'admin';
        const password = 'admin1';
        expect(oauth.signIn(login, password)).toEqual('wrong password');
    });
    test('signIn 3 times wrong password', async () => {
        const oauth = new OAuth();
        const login = 'admin';
        const password = 'admin1';
        try {
            oauth.signIn(login, password);
            oauth.signIn(login, password);
            oauth.signIn(login, password);
            oauth.signIn(login, password);
        } catch (e) {
            expect(e).toEqual(new Error('Please wait 10s, before use it again'));
        }
    });
});
