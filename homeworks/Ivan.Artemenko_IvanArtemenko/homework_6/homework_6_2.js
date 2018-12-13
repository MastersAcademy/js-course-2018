class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.speed = 0;
        this.setSpeed();
        this.distance = 0;
    }

    setSpeed() {
        this.speed = Math.round(Math.random() * (15 - 10) + 10);
    }

    run() {
        this.timerId = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(dataHorses) {
        for (let i = 0; i < dataHorses.length; i++) {
            this.horses.push(new Racer(dataHorses[i].name, dataHorses[i].breed));
        }
    }

    startRace() {
        this.horses.forEach(raser => raser.run());
        for (let counter = 1; counter <= 5; counter++) {
            setTimeout(() => {
                this.horses.forEach(raser => console.log(`Name hors ${raser.name} || Breed hors ${raser.breed} || Distans ${raser.distance}`));
            }, 2000 * counter);
        }

        setTimeout(() => {
            this.horses.sort((first, two) => two.distance - first.distance);
            console.log('WINNER');
            console.log(`|| Name hors ${this.horses[0].name} || Bred hors ${this.horses[0].breed} || Distans ${this.horses[0].distance}`);
        }, 10000);
    }
}

const dataHorses = [
    { name: 'Cleopatra', breed: 'Australian Pony' },
    { name: 'Mary', breed: 'Connemara pony' },
    { name: 'Betsy', breed: 'Gotland Pony' },
    { name: 'Mulan', breed: 'Fell Pony' },
    { name: 'William', breed: 'Exmoor pony' },
    { name: 'Caesar', breed: 'Welsh Pony' },
    { name: 'Napoleon', breed: 'Tokara Pony' },
    { name: 'Lincoln', breed: 'Noma pony' },
    { name: 'Genghis Khan', breed: 'Java Pony' },
    { name: 'Clover', breed: 'Chincoteague Pony' },
];

const rase = new Race();
rase.createRace(dataHorses);
rase.startRace();
