// task 2

const horses = [
    { name: 'hors1', breed: 'bred1' },
    { name: 'hors2', breed: 'bred2' },
    { name: 'hors3', breed: 'bred3' },
    { name: 'hors4', breed: 'bred4' },
];

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
        this.distans = 0;
        this.setSpeed();
    }

    setSpeed() {
        this.speed = Math.round(Math.random() * (15 - 10) + 10);
    }

    runing() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distans += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }
}

class Rase {
    constructor() {
        this.horses = [];
    }

    createRase() {
        horses.forEach((item) => {
            this.horses.push(new Raser(item.name, item.breed));
        });
    }

    startRase() {
        this.horses.forEach(run => run.runing());
        for (let j = 1; j <= 5; j++) {
            setTimeout(() => {
                this.horses.forEach(run => console.log(`hors ${run.name} : breed ${run.breed} : distans ${run.distans}`));
            }, 1000 * j);
        }
        setTimeout(() => {
            this.horses.sort((start, end) => end.distans - start.distans);
            console.log('win');
            console.log(`hors ${this.horses[0].name} : bred ${this.horses[0].breed} : distans ${this.horses[0].distans}`);
        }, 10000);
    }
}

const rase = new Rase();
rase.createRase();
rase.startRase();
