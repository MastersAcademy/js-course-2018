/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

const users = require('./users');

class Login {
    constructor() {
        this._failStore = [];
    }

    login(login, password) {
        const FAIL_USER = new Error('The system does not have a user registered with this login!');
        const FAIL_PASSWORD = new Error('Incorrect password entered!');

        const user = users.filter(obj => obj.login === login)[0];
        if (user === undefined) {
            this._addFail(login);
            throw FAIL_USER;
        }

        const fail = this._failStore.filter(obj => obj.login === login)[0];
        if (user.password === password && (fail === undefined || fail.count < 3)) {
            this._clearFail(login);
            return 'success';
        }

        this._addFail(login);
        throw FAIL_PASSWORD;
    }

    _addFail(login) {
        const FAIL_USER_BLOCKED = new Error('Wait 10 seconds before the next login attempt!');

        const fail = this._failStore.filter(obj => obj.login === login)[0];
        if (fail === undefined) this._failStore.push({ login, count: 1 });
        else {
            fail.count++;
            if (fail.count > 2) this._timerAllowLogin(login);
            if (fail.count > 3) throw FAIL_USER_BLOCKED;
        }
    }

    _clearFail(login) {
        const user = this._failStore.filter(obj => obj.login === login)[0];
        if (user !== undefined) this._failStore.splice(this._failStore.indexOf(user), 1);
    }

    _timerAllowLogin(login) {
        setTimeout(() => {
            this._clearFail(login);
        }, 10000);
    }
}

const login1 = new Login();

module.exports = login1;
