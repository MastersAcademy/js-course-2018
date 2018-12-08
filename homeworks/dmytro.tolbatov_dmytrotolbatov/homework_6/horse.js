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

    run() {
        this.interval = setInterval(() => {
            this.setSpeed();
            this.distance += this.speed;
        }, 1000);
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 5) + 10;
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

    startRace() {
        if (this.horses.length) {
            this.horses.forEach(horse => horse.run());

            this.printRacerState();

            setTimeout(this.stopRace.bind(this), 10000);
        }
    }

    printRacerState() {
        this.raceInterval = setInterval(() => {
            this.horses.forEach((horse) => {
                console.log(`${horse.name} (${horse.breed}) - ${horse.distance}`);
            });
        }, 2000);
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

    stopHorses() {
        if (this.raceInterval) clearInterval(this.raceInterval);
    }
}

const HORSES = [
    new Horse('horse1', 'breed1'),
    new Horse('horse2', 'breed2'),
    new Horse('horse3', 'breed3'),
    new Horse('horse4', 'breed4'),
    new Horse('horse5', 'breed5'),
    new Horse('horse6', 'breed6'),
    new Horse('horse7', 'breed7'),
    new Horse('horse8', 'breed8'),
    new Horse('horse9', 'breed9'),
    new Horse('horse10', 'breed10'),
];
const race = new Race();
race.createRace(HORSES);
race.startRace();
