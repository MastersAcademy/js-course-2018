
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
        this.speed = Math.floor(Math.random() * (16 - 10)) + 10;
    }

    run() {
        for (let i = 1; i <= 10; i++) {
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
        const players = [
            { name: 'Steven Rogers', breed: 'Captain America' },
            { name: 'Reed Richards', breed: 'Mister Fantastic' },
            { name: 'Max Eyz', breed: 'Magneto' },
            { name: 'Henry Philip Hank McCoy', breed: 'Beast' },
            { name: 'Wade Winston Wilson', breed: 'Deadpool' },
            { name: 'Tony Stark', breed: 'Iron Man' },
            { name: 'Carol Susan Jane Danvers', breed: 'Captain Marvel' },
            { name: 'Loki', breed: 'Loki' },
            { name: 'Tor', breed: 'Tor' },
            { name: 'Robert Bruce', breed: 'The Hulk' },
        ];
        players.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        console.log('Lets the battle begin');
        this.horses.forEach(racer => racer.run());
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                console.log('On this step we can see result\'s:');
                this.horses.forEach(racer => console.log(`Name: ${racer.name}, Distance ${racer.distance}`));
            }, 1000 * i);
        }
    }

    finishRace() {
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`Winners is: ${this.horses[0].name}, the ${this.horses[0].breed}, with distance ${this.horses[0].distance}`);
            this.horses.sort((a, b) => a.distance - b.distance);
            console.log(`Looser is: ${this.horses[0].name}, the ${this.horses[0].breed}, with distance ${this.horses[0].distance}`);
        }, 11000);
    }
}

const start = new Race();
start.createRace();
start.startRace();
start.finishRace();
