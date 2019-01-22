const Authorization = require('./task2');

describe('tеst login and password true or false', () => {
    const user = new Authorization();
    test('login false', () => {
        expect(user.tryEnter('Feofania', 'Stepanovna')).toEqual('error');
    });
    test('login true, password false', () => {
        expect(user.tryEnter('admin', 'Stepanovna')).toEqual('error');
    });
    test('login true, password true', () => {
        expect(user.tryEnter('admin', 'admin')).toEqual('success');
    });
});

describe('tеst 3 false try and lock user, then 1 true try', () => {
    const user = new Authorization();
    for (let i = 0; i < 3; i++) {
        test('try password false', () => {
            expect(user.tryEnter('admin', 'qwe')).toEqual('error');
        });
    }
    test('try password true but user is lock', () => {
        expect(user.tryEnter('admin', 'admin')).toEqual('error');
    });
});

describe('tеst false false true false true ', () => {
    const user = new Authorization();
    test('first try password false', () => {
        expect(user.tryEnter('admin', 'qwe')).toEqual('error');
    });
    test('second try password false', () => {
        expect(user.tryEnter('admin', 'qwe')).toEqual('error');
    });
    test('third try password true', () => {
        expect(user.tryEnter('admin', 'admin')).toEqual('success');
    });
    test('fourht try password false but user is not lock', () => {
        expect(user.tryEnter('admin', 'qwe')).toEqual('error');
    });
    test('fifth try password true', () => {
        expect(user.tryEnter('admin', 'admin')).toEqual('success');
    });
});

describe('tеst after 10 sec lock ', () => {
    jest.useFakeTimers();
    const user = new Authorization();
    for (let i = 0; i < 3; i++) {
        test('try password false', () => {
            expect(user.tryEnter('admin', 'qwe')).toEqual('error');
        });
    }
    test('try true after 9 sec', () => {
        jest.advanceTimersByTime(9000);
        expect(user.tryEnter('admin', 'admin')).toEqual('error');
    });
    test('try true after 10 sec', () => {
        jest.advanceTimersByTime(10000);
        expect(user.tryEnter('admin', 'admin')).toEqual('success');
    });
});
