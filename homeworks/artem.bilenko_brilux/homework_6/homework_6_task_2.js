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

    run() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 6) + 10;
    }
}


class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const runners = [
            { name: 'President', breed: 'Arabian' },
            { name: 'Lucky', breed: 'Quarter' },
            { name: 'Blazer', breed: 'Thoroughbred' },
            { name: 'Tank', breed: 'Tennessee' },
            { name: 'Franklin', breed: 'Morgan' },
            { name: 'Diesel', breed: 'Paint' },
            { name: 'King', breed: 'Appaloosa' },
            { name: 'Texas', breed: 'Miniature' },
            { name: 'Bolt', breed: 'Warmblood' },
            { name: 'Buck', breed: 'Andalusian' },
        ];
        runners.forEach((runner) => {
            this.horses.push((new Racer(runner.name, runner.breed)));
        });
    }

    startRace() {
        this.horses.forEach(h => h.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                console.log(`Step: ${i}`);
                this.horses.forEach((h) => {
                    console.log(h);
                });
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`Winner: ${this.horses[0].name}`);
        }, 10000);
    }
}

const start = new Race();
start.createRace();
start.startRace();
