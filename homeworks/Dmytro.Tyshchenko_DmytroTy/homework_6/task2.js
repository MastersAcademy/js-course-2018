const horsesList = [{ name: 'Big Racket', breed: 'Thoroughbred' }, { name: 'Shareef Dancer', breed: 'Thoroughbred' },
    { name: 'Green Monkey', breed: 'Thoroughbred' }, { name: 'Annihilator', breed: 'Thoroughbred' },
    { name: 'Seattle Dancer', breed: 'Thoroughbred' }, { name: 'Mystic Park', breed: 'Standardbred' },
    { name: 'Pine Chip', breed: 'Standardbred' }, { name: 'Sardar\t', breed: 'Thoroughbred' },
    { name: 'Poetin\t', breed: 'Brandenburger' }, { name: 'Lord Sinclair', breed: 'Bavarian Warmblood' }];

class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.distance = 0;
        this.speed = Racer.setSpeed();
        this.time = 0;
    }

    static setSpeed() { return 10 + 5 * Math.random(); }

    run(timeout) {
        const that = this;
        function racing(time) {
            return new Promise(() => {
                setTimeout(() => {
                    that.distance += that.speed;
                    that.speed = Racer.setSpeed();
                    that.time = time;
                    if (time < timeout) racing(time + 1);
                }, 1000);
            });
        }
        racing(1);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        this.horses = horsesList.map(obj => new Racer(obj.name, obj.breed));
    }

    startRece(timeout) {
        this.horses.forEach(obj => obj.run(timeout));
        const that = this;
        function racing(time) {
            setTimeout(() => {
                function synchronization() {
                    return new Promise((resolve, reject) => {
                        if (that.horses.some(obj => obj.time < time)) reject();
                        else resolve();
                    });
                }
                function logRacing() {
                    console.log(that.horses.reduce(
                        (str, obj) => `${str}${obj.name}\t(${obj.breed})\t\trun\t${obj.distance} m\n`,
                        `Time = ${time} c:\n`,
                    ));
                    if (time < timeout) racing(time + 2);
                    else {
                        that.horses.sort((a, b) => b.distance - a.distance);
                        console.log(`Winner: ${that.horses[0].name}   congratulate the champion!`);
                    }
                }
                synchronization()
                    .then(logRacing)
                    .catch(() => setTimeout(() => synchronization()
                        .then(logRacing)
                        .catch(() => setTimeout(() => synchronization()
                            .then(logRacing).catch(() => { console.log('It seems that the program has fallen for some reason'); }),
                        500)),
                    16));
            }, 2000);
        }
        racing(2);
    }
}

const race1 = new Race();

race1.createRace();
race1.startRece(10);
