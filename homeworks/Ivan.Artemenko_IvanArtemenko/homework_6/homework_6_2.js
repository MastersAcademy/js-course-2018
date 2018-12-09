class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Raser extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.speed = 0;
        this.setSpeed();
        this.distans = 0;
    }

    setSpeed() {
        this.speed = Math.round(Math.random() * (15 - 10) + 10);
    }

    run() {
        for (let time = 1; time <= 10; time++) {
            setTimeout(() => {
                this.distans += this.speed;
                this.setSpeed();
            }, 1000 * time);
        }
    }
}

class Rase {
    constructor() {
        this.horses = [];
    }

    createRase() {
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
        dataHorses.forEach((raser) => {
            this.horses.push(new Raser(raser.name, raser.breed));
        });
    }

    startRase() {
        this.horses.forEach(raser => raser.run());
        for (let counter = 1; counter <= 5; counter++) {
            setTimeout(() => {
                this.horses.forEach(raser => console.log(`Name hors ${raser.name} || Breed hors ${raser.breed} || Distans ${raser.distans}`));
            }, 2000 * counter);
        }
        setTimeout(() => {
            this.horses.sort((first, two) => two.distans - first.distans);
            console.log('WINNER');
            console.log(`|| Name hors ${this.horses[0].name} || Bred hors ${this.horses[0].breed} || Distans ${this.horses[0].distans}`);
        }, 11000);
    }
}

const rase = new Rase();
rase.createRase();
rase.startRase();
