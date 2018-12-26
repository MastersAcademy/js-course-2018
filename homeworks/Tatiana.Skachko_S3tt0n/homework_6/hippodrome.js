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

    run() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }

    setSpeed() {
        const from = 10;
        const to = 15;
        this.speed = Math.floor(Math.random() * (to - from)) + from;
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const horsesList = [
            { Opal: 'Friesian' },
            { Batman: 'Cleveland Bay' },
            { Goldeneye: 'Arabian horse' },
            { Roger: 'Appaloosa' },
            { Peppercorn: 'Tennessee Walker' },
            { Dakota: 'Morgan' },
            { Apple: 'Andalusian' },
            { Highlander: 'Thoroughbred' },
            { Joker: 'Quarter horse' },
            { Toffee: 'Paint horse' },
        ];
        horsesList.forEach((racer) => {
            this.horses.push(new Racer(racer[0], racer[1]));
        });
    }

    startRace() {
        this.horses.forEach(racer => racer.run(10));
        this.monitoring();
        this.winner();
    }

    monitoring() {
        let time = 2000;
        for (let i = 1; i <= 10 / 2; i++) {
            setTimeout(() => {
                console.log(` --- round ${i} --- `);
                this.horses.forEach((racer) => {
                    console.log(`Horse: ${racer.name} \tBreed: ${racer.breed} \tDistance: ${racer.distance}`);
                });
            }, time);
            time += 2000;
        }
    }

    winner() {
        const time = (10 + 1) * 1000;
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            if (this.horses[0].distance !== this.horses[1].distance) {
                console.log('!!! WINNER !!!');
                console.log(`${this.horses[0].name} wins!`);
                console.log(`Breed: ${this.horses[0].breed}`);
                console.log(`Distance: ${this.horses[0].distance}`);
            }
        }, time);
    }
}
const race = new Race();
race.createRace();
race.startRace();
