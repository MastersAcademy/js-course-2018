

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
                this.horses.forEach(raser => console.log(`${raser.name} - ${raser.breed} __ Distance - ${raser.distance}`));
            }, 2000 * counter);
        }

        setTimeout(() => {
            this.horses.sort((first, two) => two.distance - first.distance);
            console.log('The horse that came first:');
            console.log(`${this.horses[0].name} - ${this.horses[0].breed} __ Distance - ${this.horses[0].distance}`);
        }, 10000);
    }
}

const rase = new Race();

const dataHorses = [
    { name: 'Zia', breed: 'Akhal' },
    { name: 'Star', breed: 'Chilean' },
    { name: 'Jadviga', breed: 'Azores' },
    { name: 'Wendy', breed: 'Friesian' },
    { name: 'Fair', breed: 'French' },
    { name: 'Jamaica', breed: 'Pony' },
    { name: 'Zoria', breed: 'Arabian' },
    { name: 'Vanessa', breed: 'Belgian' },
    { name: 'Veig', breed: 'Zebra' },
    { name: 'Berry', breed: 'Percheron' },
];

rase.createRace(dataHorses);
rase.startRace();
