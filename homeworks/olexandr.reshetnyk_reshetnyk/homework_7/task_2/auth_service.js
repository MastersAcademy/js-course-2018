const { getUsers } = require('./users_data');

class AuthService {
    constructor() {
        this.wrongAttemptsInRow = 0;
        this.isTimeouted = false;
        this.users = getUsers();
    }

    logInUser(login, pass) {
        if (this.isTimeouted) return 'timeouted';

        const foundedUsers = this.users.filter(user => user.login === login
            && user.password === pass);

        if (foundedUsers.length > 0) {
            this.wrongAttemptsInRow = 0;
            return 'success';
        }


        this.wrongAttemptsInRow++;

        if (this.wrongAttemptsInRow >= 3) {
            this.isTimeouted = true;
            setTimeout(() => {
                this.isTimeouted = false;
                this.wrongAttemptsInRow = 0;
            }, 10000);
        }
        return 'error';
    }
}

module.exports.AuthService = AuthService;
