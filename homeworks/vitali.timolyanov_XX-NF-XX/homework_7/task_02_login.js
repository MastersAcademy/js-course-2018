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
        if (!this.isUserExists(user)) return this.onError('User not found');

        if (this.isLocked(user)) return this.onError('Login is locked! Try again later');

        if (this.isPasswordCorrect(user, password)) return this.onSuccess(user);

        return this.onError(`Wrong password! User "${user}"`, user);
    }

    isUserExists(user) {
        if (typeof (this.logins.find(current => current.login === user)) === 'undefined') return false;
        return true;
    }

    isPasswordCorrect(user, password) {
        const login = this.logins.find(current => current.login === user);

        if (password === login.password) return true;
        return false;
    }

    onSuccess(user) {
        if (this.isLocked(user)) this.unlock(user);
        return 'success';
    }

    onError(message, user = null) {
        if (user !== null) this.addFail(user);
        return message;
    }

    addFail(user) {
        let failed = this.failedLogins.get(user);
        failed = failed ? failed + 1 : 1;
        this.failedLogins.set(user, failed);

        if (failed > MAX_FAILED_LOGINS) this.lock(user);
    }

    lock(user) {
        setTimeout(this.unlock.bind(this), LOCK_TIME, user);
    }

    isLocked(user) {
        return this.failedLogins.has(user) && this.failedLogins.get(user) > MAX_FAILED_LOGINS;
    }

    unlock(user) {
        this.failedLogins.delete(user);
    }
}

module.exports = Login;
