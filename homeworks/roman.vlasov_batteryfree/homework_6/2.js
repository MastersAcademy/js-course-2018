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
        this.setSpeed();
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 6 + 10);
    }

    run() {
        this.runing = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        if (typeof this.runing === 'object') {
            clearInterval(this.runing);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(stabling) {
        stabling.forEach((element) => {
            this.horses.push(new Racer(element.name, element.breed));
        });
    }

    startRace() {
        this.horses.forEach(element => element.run());
        const runingRace = setInterval(() => {
            this.horses.forEach(element => console.log(element));
        }, 2000);

        setTimeout(() => {
            clearInterval(runingRace);
            this.horses.forEach(element => element.stop());
            this.horses.sort((element1, element2) => element2.distance - element1.distance);
            console.log(`Winner: ${this.horses[0].name}`);
        }, 10000);
    }
}

const stabling = [
    { name: 'Buck', breed: 'Zebra' },
    { name: 'Widowmaker', breed: 'Pony' },
    { name: 'Cyril Proudbottom', breed: 'Arabian' },
    { name: 'Snowball', breed: 'Przewalski' },
    { name: 'Ahill', breed: 'Zebra' },
    { name: 'Tagged', breed: 'Arabian' },
    { name: 'Captain', breed: 'Przewalski' },
    { name: 'Han', breed: 'Arabian' },
    { name: 'Major', breed: 'Arabian' },
    { name: 'Max', breed: 'Pony' },
];

const horseRacing = new Race();
horseRacing.createRace(stabling);
horseRacing.startRace();
