const users = require('./users.json');

class Authorization {
    constructor() {
        this.tryCounts = {};
        this.maxError = 3;
        this.timeLocked = 10000;
    }

    tryEnter(login, password) {
        const client = users.find(obj => obj.login === login);

        if (!client) { // if login is not exist
            console.log('error');
            return 'error';
        }

        if (client.password === password) {
            if (this.tryCounts[login] >= this.maxError) { // if user is locked
                console.log('this login is locked');
                return 'error';
            }
            console.log('success');
            delete this.tryCounts[login];
            return 'success';
        }

        this.tryCounts[login] = this.tryCounts[login] ? this.tryCounts[login] + 1 : 1;

        if (this.tryCounts[login] === this.maxError) { // if 3 error in a row
            console.log('error');
            console.log(`login ${login} is locked to 10 sec`);
            setTimeout(() => {
                delete this.tryCounts[login];
                console.log(`login ${login} is unlocked`);
            }, this.timeLocked);
            return 'error';
        }

        if (this.tryCounts[login] > this.maxError) { // if user is locked
            console.log('this login is locked');
            return 'error';
        }
        console.log('error');
        return 'error';
    }
}

module.exports = Authorization;
