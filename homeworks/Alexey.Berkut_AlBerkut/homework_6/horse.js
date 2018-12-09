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
        this.speed = Math.floor(Math.random() * 15) + 10;
    }

    run() {
        this.timer = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        if (this.timer !== undefined) {
            clearInterval(this.timer);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(racers) {
        racers.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        this.step = 0;
        this.horses.forEach(racer => racer.run());
        this.timer = setInterval(() => {
            this.step++;
            this.horses.forEach(racer => console.log(racer.name,
                racer.breed,
                racer.distance,
                racer.speed));

            if (this.step >= 10) {
                clearInterval(this.timer);
                this.horses.forEach(racer => racer.stop());
                this.findWinner();
            }
        }, 2000);
    }

    findWinner() {
        this.horses.sort((x, y) => y.distance - x.distance);
        console.log(`=== ${this.horses[0].breed} ${this.horses[0].name} win! ===`);
    }
}

const racers = [
    { name: 'Roach', breed: 'Geralt\'s Horse' },
    { name: 'Pegasus', breed: 'Dandelion\'s white gelding' },
    { name: 'Aard', breed: 'Windhorse' },
    { name: 'Ignis', breed: 'Firehorse' },
    { name: 'Quen', breed: 'Battlehorse' },
    { name: 'Axii', breed: 'Calmhorse' },
    { name: 'Yrden', breed: 'Magichorse' },
    { name: 'Kelpie', breed: 'Ciri\'s Horse' },
    { name: 'Scorpion', breed: 'Eskel\'s horse' },
    { name: 'Lexa', breed: 'Student' },
];

const race = new Race();
race.createRace(racers);
race.startRace();
