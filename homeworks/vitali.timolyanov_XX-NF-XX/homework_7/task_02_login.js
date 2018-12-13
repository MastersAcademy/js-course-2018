const MAX_FAILED_LOGINS = 3;
const LOCK_TIME = 10000;

const fs = require('fs');

const loginFile = './task_02_logins.json';

class Login {
    constructor() {
        this.logins = JSON.parse(fs.readFileSync(loginFile).toString().trim());
        this.failedLogins = new Map();
    }

    login(user, password) {
        const login = this.logins.find(current => current.login === user);

        if (typeof login === 'undefined') return this.onError('User not found');

        if (this.failedLogins.has(user) && this.failedLogins.get(user) > MAX_FAILED_LOGINS) {
            return this.onError('Login is locked! Try again later');
        }

        if (password === login.password) return this.onSuccess(user);

        return this.onError(`Wrong password! User "${user}"`, user);
    }

    onSuccess(user) {
        this.unlock(user);
        return 'success';
    }

    onError(message, user = null) {
        if (user === null) return message;

        let failed = this.failedLogins.get(user);
        failed = failed ? failed + 1 : 1;
        this.failedLogins.set(user, failed);

        if (failed > MAX_FAILED_LOGINS) this.lock(user);

        return message;
    }

    lock(user) {
        setTimeout(this.unlock.bind(this), LOCK_TIME, user);
    }

    unlock(user) {
        this.failedLogins.delete(user);
    }
}

module.exports = Login;
