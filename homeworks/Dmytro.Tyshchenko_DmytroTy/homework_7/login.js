/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

const users = require('./users');

class Login {
    constructor() {
        this.failed = [];
    }

    login(login, password) {
        const FAIL_USER = new Error('The system does not have a user registered with this login!');
        const FAIL_PASSWORD = new Error('Incorrect password entered!');

        [this.user] = users.filter(obj => obj.login === login);
        if (this.user === undefined) {
            this._addFail(login);
            throw FAIL_USER;
        }

        [this.fail] = this.failed.filter(obj => obj.login === login);
        if (this.user.password === password && (this.fail === undefined || this.fail.count < 3)) {
            this._clearFail();
            return 'success';
        }

        this._addFail(login);
        throw FAIL_PASSWORD;
    }

    _addFail(login) {
        const FAIL_USER_BLOCKED = new Error('Wait 10 seconds before the next login attempt!');
        if (this.fail === undefined) this.failed.push({ login, count: 1 });
        else {
            this.fail.count++;
            if (this.fail.count > 2) this._timerAllowLogin();
            if (this.fail.count > 3) throw FAIL_USER_BLOCKED;
        }
    }

    _clearFail() {
        this.failed.splice(this.failed.indexOf(this.fail), 1);
    }

    _timerAllowLogin() {
        setTimeout(() => {
            this._clearFail();
        }, 10000);
    }
}

const login1 = new Login();

module.exports = login1;
