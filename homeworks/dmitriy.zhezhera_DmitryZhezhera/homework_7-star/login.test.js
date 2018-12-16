const login = require('./login.js');

test('test1 success admin admin', () => {
    expect(login.login('admin', 'admin')).toBe('success');
});

test('test2 failed admin abracadabra', () => {
    expect(login.login('admin', 'abracadabra')).toBe('failed');
});

// jest.useFakeTimers();

test('test3 failed admin abracadabra', () => {
    expect(login.login('admin', 'abracadabra')).toBe('failed');
    expect(login.login('admin', 'abracadabra')).toBe('failed');
    expect(login.login('admin', 'abracadabra')).toBe('failed');
    expect(login.login('admin', 'admin')).not.toBe('success');
    // jest.advanceTimersByTime(11000);  TODO NOT WORKING (((
    // expect(login.login('admin', 'admin')).toBe('success');
});
