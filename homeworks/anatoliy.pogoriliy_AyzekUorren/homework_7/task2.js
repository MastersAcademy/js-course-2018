const UserDB = require('./userDB');
/**
 * OAuth for users
 */
class OAuth {
    constructor() {
        this.users = [];
        UserDB.forEach(element => this.users.push(element));
        this.attemptsLogin = 0;
    }

    /**
     * @param {string} login
     * @param {string} password
     * @returns string 'success', 'wrong password' or throw error
     * @throws Error('User not exists, please use different credentials')
     */
    signIn(login, password) {
        this.attemptsTimer();
        const matchUser = this.users.find(element => element.login === login);

        if (!matchUser) {
            throw new Error('User not exists, please use different credentials');
        }

        if (matchUser.password === password) {
            this.attemptsLogin = 0;
            return 'success';
        }
        this.attemptsLogin++;
        return 'wrong password';
    }

    /**
     * @throws Error('Please wait 10s, before use it again')
     */
    attemptsTimer() {
        if (this.attemptsLogin === 3) {
            if (!this.timer) {
                this.timer = setTimeout(() => {
                    this.attemptsLogin = 0;
                }, 10000);
            }
            throw new Error('Please wait 10s, before use it again');
        }
    }
}

module.exports = OAuth;
