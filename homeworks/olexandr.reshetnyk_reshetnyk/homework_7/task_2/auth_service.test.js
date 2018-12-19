jest.mock('./users_data');

const { getUsers } = require('./users_data');
const { AuthService } = require('./auth_service');

const AUTH_STATUS = {
    OK: 'success',
    TIMEOUTED: 'timeouted',
    ERROR: 'error',
};

getUsers.mockReturnValue([
    {
        login: '11',
        password: '11',
    },
]);

describe('Testing function logInUser of class AuthService', () => {
    jest.useFakeTimers();

    test('Authorisation of existing user.', () => {
        const authService = new AuthService();
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
        jest.advanceTimersByTime(10000);
    });

    test('Denying of unexisting user.', () => {
        const authService = new AuthService();
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.ERROR);
    });

    test('Timeouting user that was wrong 3 times in a row.', () => {
        const authService = new AuthService();
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        expect(authService.logInUser('', '')).toEqual(AUTH_STATUS.TIMEOUTED);
        jest.advanceTimersByTime(10000);
    });

    test('Alternate authorisations (right, correct, right, correct...) .', () => {
        const authService = new AuthService();
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.ERROR);
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.ERROR);
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.ERROR);
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.ERROR);
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.ERROR);
    });

    // sorry for my bad english
    test('Right auth after been got timeouted.', () => {
        const authService = new AuthService();
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        jest.advanceTimersByTime(10000);
        expect(authService.logInUser('11', '11')).toEqual(AUTH_STATUS.OK);
    });

    test('(3 times wrong auth, 1 time wrong auth with checking status)x2 times in row', () => {
        const authService = new AuthService();
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.TIMEOUTED);
        jest.advanceTimersByTime(10000);
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        authService.logInUser('111', '111');
        expect(authService.logInUser('111', '111')).toEqual(AUTH_STATUS.TIMEOUTED);
        jest.advanceTimersByTime(10000);
    });
});
