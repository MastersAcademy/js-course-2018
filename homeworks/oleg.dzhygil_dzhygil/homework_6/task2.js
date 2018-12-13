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
        this.speed = Math.floor(Math.random() * (15 - 10)) + 10;
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
        const participants = [
            { name: 'Deadpool', breed: 'Arabian' },
            { name: 'Steven', breed: 'Quarter Horse' },
            { name: 'Robert Cowboy', breed: 'Thoroughbred' },
            { name: 'Canelli', breed: 'Tennessee Walker' },
            { name: 'Tripple Kill', breed: 'Morgan' },
            { name: 'Candy', breed: 'Paint' },
            { name: 'Junior', breed: 'Miniature Horse' },
            { name: 'Coldblood', breed: 'Warmblood' },
            { name: 'Sweetheart', breed: 'Andalusian' },
            { name: 'Bob', breed: 'Morgan' },
        ];
        participants.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        console.log('Lady and Gentlemans, our race is beginning:');
        this.horses.forEach(racer => racer.run());
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.horses.forEach(racer => console.log(`Name: ${racer.name}; Distance: ${racer.distance}.`));
            }, 1000 * i);
        }
    }

    finishRace() {
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`Winner is: ${this.horses[0].name}; Breed is: ${this.horses[0].breed}; Final distance: ${this.horses[0].distance}.`);
        }, 11000);
    }
}
const start = new Race();
start.createRace();
start.startRace();
start.finishRace();
