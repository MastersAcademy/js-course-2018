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
        if (!this.running) {
            clearInterval(this.runing);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(stabling) {
        this.horses = (stabling);
    }

    startRace() {
        this.horses.forEach(element => element.run());
        const runingRace = setInterval(() => {
            this.horses.forEach(element => console.log(`Name:${element.name}, breed:${element.breed}, 
            distance:${element.distance}, speed:${element.speed}`));
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
    new Racer('Buck', 'Zebra'),
    new Racer('Widowmaker', 'Pony'),
    new Racer('Cyril Proudbottom', 'Arabian'),
    new Racer('Snowball', 'Przewalski'),
    new Racer('Ahill', 'Zebra'),
    new Racer('Tagged', 'Arabian'),
    new Racer('Captain', 'Przewalski'),
    new Racer('Han', 'Arabian'),
    new Racer('Major', 'Arabian'),
    new Racer('Max', 'Pony'),
];

const horseRacing = new Race();
horseRacing.createRace(stabling);
horseRacing.startRace();
