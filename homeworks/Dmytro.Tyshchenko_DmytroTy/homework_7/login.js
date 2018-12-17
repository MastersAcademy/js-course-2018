const USERS = require('./users');

class Login {
    constructor() {
        this.failed = [];
    }

    login(login, password) {
        const FAIL_USER = new Error('The system does not have a user registered with this login!');
        const FAIL_PASSWORD = new Error('Incorrect password entered!');
        const FAIL_USER_BLOCKED = new Error('Wait 10 seconds before the next login attempt!');

        const fail = this.failed.filter(obj => obj.login === login)[0];
        if (fail === undefined) this.failed.push({ login, count: 1 });
        else {
            fail.count++;
            if (fail.count > 2) this.timerAllowLogin(login);
            if (fail.count > 3) throw FAIL_USER_BLOCKED;
        }

        const user = USERS.filter(obj => obj.login === login)[0];
        if (user === undefined) throw FAIL_USER;

        if (user.password === password) return 'success';

        throw FAIL_PASSWORD;
    }

    timerAllowLogin(login) {
        setTimeout(() => {
            const user = this.failed.filter(obj => obj.login === login)[0];
            this.failed.splice(this.failed.indexOf(user), 1);
        }, 10000);
    }
}

const login1 = new Login();

module.exports = login1;
