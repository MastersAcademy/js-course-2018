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
        this.setSpeed();
        this.time = 0;
    }

    setSpeed() { this.speed = 10 + 5 * Math.random(); }

    run(timeout) {
        const intervalID = setInterval(() => {
            this.distance += this.speed;
            this.time++;
            this.setSpeed();

            if (this.time >= timeout) clearInterval(intervalID);
        }, 1000);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        this.horses = horsesList.map(obj => new Racer(obj.name, obj.breed));
    }

    startRace(timeout) {
        this.time = 0;
        this.finish = timeout;

        this.horses.forEach(obj => obj.run(timeout));

        setTimeout(() => {
            this.intervalID = setInterval(() => this.logRacing(), 2000);
        }, 100);
    }

    logRacing() {
        this.time += 2;

        function createLogRacing(str, obj) {
            return `${str}${obj.name}\t(${obj.breed})\t\trun\t${obj.distance} m\n`;
        }

        console.log(this.horses.reduce(createLogRacing, `Time = ${this.time} c:\n`));

        if (this.time >= this.finish) {
            clearInterval(this.intervalID);
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`Winner: ${this.horses[0].name}   congratulate the champion!`);
        }
    }
}

const race1 = new Race();

race1.createRace();
race1.startRace(10);
