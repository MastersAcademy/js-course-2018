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
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }

    run() {
        this.interval = setInterval(() => {
            this.setSpeed();
            this.distance += this.speed;
        }, 1000);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horses) {
        horses.forEach((horse) => {
            this.horses.push(new Racer(horse.name, horse.breed));
        });
    }

    startRace() {
        let raceInterval;
        if (this.horses.length) {
            this.horses.forEach((horse) => {
                horse.run();
            });

            raceInterval = setInterval(() => {
                this.horses.forEach((horse) => {
                    console.log(`${horse.name} (${horse.breed}) - ${horse.distance}`);
                });
            }, 2000);

            setTimeout(() => {
                let winner = { distance: 0 };
                clearInterval(raceInterval);
                this.horses.forEach((horse) => {
                    if (horse.distance > winner.distance) {
                        winner = horse;
                    }
                    horse.stop();
                });

                console.log(`Winner: ${winner.name} (${winner.breed}) - ${winner.distance}`);
            }, 10000);
        }
    }
}

const horsesArray = [
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
race.createRace(horsesArray);
race.startRace();
