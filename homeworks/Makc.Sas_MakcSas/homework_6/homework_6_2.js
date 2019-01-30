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
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }

    run() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
                console.log(this);
            }, 1000 * i);
        }
    }
}
class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const normalize = [
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
        normalize.forEach((value) => {
            this.horses.push(new Racer(value.name, value.breed));
        });
    }

    startRace() {
        this.horses.forEach(value => value.run());
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.horses.forEach(value => console.log(value));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((value1, value2) => value2.distance - value1.distance);
            console.log(`Winner: ${this.horses[0].name}`);
        }, 10000);
    }
}
const horseRacing = new Race();
horseRacing.createRace();
horseRacing.startRace();
