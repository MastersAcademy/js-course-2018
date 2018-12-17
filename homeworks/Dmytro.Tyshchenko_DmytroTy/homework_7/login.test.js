const login = require('./login');

test('User exist', () => {
    expect(login.login('zayka123', 'qwerty321')).toEqual('success');
});

test('User don\'t exist', () => {
    const error = new Error('The system does not have a user registered with this login!');
    expect(() => login.login('zayka', 'veryStrongPassword')).toThrow(error);
});

for (let i = 0; i < 3; i++) {
    test(`Incorrect password entered ${i + 1} times`, () => {
        const error = new Error('Incorrect password entered!');
        expect(() => login.login('admin', 'veryStrongPassword')).toThrow(error);
    });
}

test('User enters the correct password immediately after three unsuccessful attempts', () => {
    const error = new Error('Wait 10 seconds before the next login attempt!');
    expect(() => login.login('admin', 'admin')).toThrow(error);
});

jest.useFakeTimers();

test('User enters the correct password 10 seconds after three unsuccessful attempts', () => {
    jest.advanceTimersByTime(10500);
    expect(login.login('admin', 'admin')).toEqual('success');
});
