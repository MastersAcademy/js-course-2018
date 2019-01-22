class Racer {
    constructor() {
        this.distance = 0;
    }

    start() {
        setInterval(() => {
            this.distance += 10;
        }, 5000);
    }
}

module.exports = { Racer };
