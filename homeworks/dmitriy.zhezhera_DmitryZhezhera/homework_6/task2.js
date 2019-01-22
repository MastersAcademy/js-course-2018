class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}
// ===
class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.distance = 0;
        this.speed = 0;
        this.setSpeed();
        this.timerId = 0;
    }

    setSpeed() {
        this.speed = Math.random(10, 15) * 5 + 10;
    }

    run() {
        this.timerId = setInterval(() => {
            this.distance += this.speed;
            // console.log(this.name, ' distance passed ', this.distance);
            this.setSpeed();
        }, 1000);
    }

    stop() {
        clearInterval(this.timerId);
    }
}
// ===
const arrHorses = [];
function createHorses(totlaHorses) {
    for (let i = 0; i < totlaHorses; i++) { arrHorses[i] = new Horse(`horse${i}`, `breed${i}`); }
}
// ===
class Race {
    constructor() {
        this.horses = [];
        this.createRace(10);
    }

    createRace(totalRacers) {
        for (let i = 0; i < totalRacers; i++) {
            this.horses[i] = new Racer(arrHorses[i].name, arrHorses[i].breed);
        }
    }

    startRace() {
        this.horses.forEach(racer => racer.run());

        const timerId = setInterval(() => {
            this.horses.forEach(racer => console.log(racer.name, ' ', racer.breed, ' distance: ', racer.distance));
        }, 2000);

        setTimeout(() => {
            clearInterval(timerId);
            let winner = this.horses[0];
            this.horses.forEach((racer) => {
                racer.stop();
                if (racer.distance > winner.distance) winner = racer;
            });
            console.log('WINNER IS ', winner.name, ' ', winner.breed, ' distance passed ', winner.distance);
        }, 10000);
    }
}

createHorses(20);
const race = new Race();
race.startRace();
