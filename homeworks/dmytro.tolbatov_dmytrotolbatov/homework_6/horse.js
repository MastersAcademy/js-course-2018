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
        this.interval = null;
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        this.interval = setInterval(() => {
            this.setSpeed();
            this.distance += this.speed;
        }, 1000);
    }

    stop() {
        if (this.interval) clearInterval(this.interval);
    }
}

class Race {
    constructor() {
        this.horses = [];
        this.raceInterval = null;
    }

    createRace(horses) {
        this.horses = horses.map(horse => new Racer(horse.name, horse.breed));
    }

    printRacerState() {
        this.raceInterval = setInterval(() => {
            this.horses.forEach((horse) => {
                console.log(`${horse.name} (${horse.breed}) - ${horse.distance}`);
            });
        }, 2000);
    }

    stopHorses() {
        if (this.raceInterval) clearInterval(this.raceInterval);
    }

    stopRace() {
        let winner = { distance: 0 };
        this.stopHorses();
        this.horses.forEach((horse) => {
            if (horse.distance > winner.distance) winner = horse;

            horse.stop();
        });

        console.log(`Winner: ${winner.name} (${winner.breed}) - ${winner.distance}`);
    }

    startRace() {
        if (this.horses.length) {
            this.horses.forEach(horse => horse.run());

            this.printRacerState();

            setTimeout(() => {
                this.stopRace();
            }, 10000);
        }
    }
}

const HORSES = [
    { name: 'horse1', breed: 'breed1' },
    { name: 'horse2', breed: 'breed2' },
    { name: 'horse3', breed: 'breed3' },
    { name: 'horse4', breed: 'breed4' },
    { name: 'horse5', breed: 'breed5' },
    { name: 'horse6', breed: 'breed6' },
    { name: 'horse7', breed: 'breed7' },
    { name: 'horse8', breed: 'breed8' },
    { name: 'horse9', breed: 'breed9' },
    { name: 'horse10', breed: 'breed10' },
];
const race = new Race();
race.createRace(HORSES);
race.startRace();
