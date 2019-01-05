const users = require('./users');

console.log(users);

class Login {
    constructor() {
        this.lastResult = 'failed';
        this.ourUser = '';
    }

    wrongPassword() {
        this.ourUser.nFails = (this.ourUser.nFails === undefined ? 0 : this.ourUser.nFails) + 1;
        this.ourUser.timeLastFail = Date.now();
        return 'failed';
    }

    correctPassword() {
        let result = '';
        if (this.ourUser.nFails >= 3
            && Date.now() <= this.ourUser.timeLastFail + 10000) {
            result = `authentification is blocked for ${this.ourUser.timeLastFail + 10 - Date.now()} seconds`;
        } else {
            this.ourUser.nFails = 0;
            result = 'success';
        }
        return result;
    }

    login(login, password) {
        this.ourUser = users.find(user => user.login === login);
        if (this.ourUser === undefined) return 'failed';
        if (this.ourUser.password !== password) this.lastResult = this.wrongPassword();
        else this.lastResult = this.correctPassword();
        return this.lastResult;
    }
}

const login = new Login();
// console.log(login.login('admin', 'admin'));
// console.log(login.login('user', 'admin'));
// console.log(login.login('admin', 'admin1'));
// console.log(login.login('admin', 'admin2'));
// console.log(login.login('admin', 'admin3'));
// console.log(login.login('admin', 'admin'));

module.exports = login;
