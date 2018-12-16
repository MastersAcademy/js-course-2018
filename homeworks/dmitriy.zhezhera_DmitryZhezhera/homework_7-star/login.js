const users = require('./users');
// console.log(users);

class Login {
    constructor() {
        this.lastResult = 'failed';
    }

    login(login, password) {
        this.lastResult = 'failed';
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === login) {
                if (users[i].password !== password) {
                    users[i].nFails = (users[i].nFails === undefined ? 0 : users[i].nFails) + 1;
                    users[i].timeLastFail = Date.now();
                    break;
                } else { // if (users[i].password === password)
                    if (users[i].nFails >= 3
                    && Date.now() <= users[i].timeLastFail + 10000) {
                        this.lastResult = `authentification is blocked for ${users[i].timeLastFail + 10 - Date.now()} seconds`;
                        break;
                    }
                    // ---
                    this.lastResult = 'success';
                    users[i].nFails = 0;
                }
                break;
            }
        }
        return this.lastResult;
    }
}

const login = new Login();
// console.log(login.login('admin', 'admin'));
// console.log(login.login('admin', 'admin1'));
// console.log(login.login('admin', 'admin2'));
// console.log(login.login('admin', 'admin3'));
// console.log(login.login('admin', 'admin'));

module.exports = login;
