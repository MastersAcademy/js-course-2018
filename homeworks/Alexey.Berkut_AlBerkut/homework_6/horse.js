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
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
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
        racers.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        this.horses.forEach(racer => racer.run());
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.horses.forEach(racer => console.log(racer));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((x, y) => y.distance - x.distance);
            console.log(`=== ${this.horses[0].breed} ${this.horses[0].name} win! ===`);
        }, 10000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
