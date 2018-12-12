const MIN_SPEED = 10;
const MAX_SPEED = 15;

class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    static setSpeed() {
        return Math.floor(Math.random() * (MAX_SPEED - MIN_SPEED + 1)) + MIN_SPEED;
    }

    constructor(name, breed) {
        super(name, breed);
        this.distance = 0;
        this.speed = this.constructor.setSpeed();
        this.id = '';
    }

    run() {
        this.id = setInterval(() => {
            this.distance += this.speed;
            this.speed = this.constructor.setSpeed();
        }, 1000);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horses) {
        this.horses = horses.map(horse => new Racer(horse.name, horse.breed));
    }

    startRace() {
        let winner;
        let max = 0;

        this.horses.forEach(horse => horse.run());

        const raceId = setInterval(() => {
            this.horses.forEach((horse) => {
                console.log(`Name: ${horse.name}, breed: ${horse.breed}, distance: ${horse.distance}`);
            });
            console.log('-------------------------------------------');
        }, 2015);
        setTimeout(() => {
            clearInterval(raceId);
            this.horses.forEach((horse) => {
                if (horse.distance > max) {
                    winner = horse.name;
                    max = horse.distance;
                }
                clearInterval(horse.id);
            });
            console.log(`Winner: ${winner}`);
        }, 10080);
    }
}

// output results

const horseData = [
    { name: 'Autumn Gold', breed: 'Appaloosa' },
    { name: 'Peter Pen', breed: 'Arabian' },
    { name: 'Russel', breed: 'Quarter Horse' },
    { name: 'Above and Beyond', breed: 'Thoroughbred' },
    { name: 'Fiona', breed: 'Paint' },
    { name: 'Peanut', breed: 'Thoroughbred' },
    { name: 'Air Born', breed: 'Thoroughbred' },
    { name: 'Warrior', breed: 'Appaloosa' },
    { name: 'Java', breed: 'Thoroughbred' },
    { name: 'Wind', breed: 'Appaloosa' },
    { name: 'Jet', breed: 'Paint' },
];

const race = new Race();
race.createRace(horseData);
race.startRace();
