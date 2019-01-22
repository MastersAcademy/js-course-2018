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
        this.speed = 0;
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        this.timer = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        if (this.timer) clearInterval(this.timer);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horses) {
        this.horses = horses;
    }

    startRace() {
        if (this.horses.length) {
            this.horses.forEach(horse => horse.run());
            this.logRacerState();
            setTimeout(this.stopRace.bind(this), 10000);
        }
    }

    logRacerState() {
        this.timer = setInterval(() => {
            this.horses.forEach((horse) => {
                console.log(`${horse.breed} ${horse.name} : ${horse.distance}`);
            });
        }, 2000);
    }

    stopRace() {
        if (this.timer) clearInterval(this.timer);
        this.horses.forEach(horse => horse.stop());
        console.log(this.findWinner().breed, this.findWinner().name, 'Win!');
    }

    findWinner() {
        this.horses.sort((i1, i2) => i1.distance - i2.distance);
        return this.horses[0];
    }
}

const HORSES = [
    new Racer('Roach', 'Geralt\'s Horse'),
    new Racer('Pegasus', 'Dandelion\'s white gelding'),
    new Racer('Aard', 'Windhorse'),
    new Racer('Ignis', 'Firehorse'),
    new Racer('Quen', 'Battlehorse'),
    new Racer('Axii', 'Calmhorse'),
    new Racer('Yrden', 'Magichorse'),
    new Racer('Kelpie', 'Ciri\'s Horse'),
    new Racer('Scorpion', 'Eskel\'s horse'),
    new Racer('Lexa', 'Student'),
];

const race = new Race();
race.createRace(HORSES);
race.startRace();
