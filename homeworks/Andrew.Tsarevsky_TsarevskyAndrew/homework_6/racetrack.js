
class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.speed = 0;
        this.distance = 0;
        this.timeout = 0;
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        this.timeout = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        clearInterval(this.timeout);
    }
}

const Breeds = ['Pony', 'Akhal-Teke horse', 'Akhalteke', 'Frieze', 'Shire'];

function createArrayHorses() {
    const horses = [];
    for (let i = 1; i < 11; i++) {
        const randomBreed = Math.floor(Math.random() * Breeds.length);
        const breed = Breeds[randomBreed];
        horses.push(new Racer(`Horse ${i}`, breed));
    }
    return horses;
}

class Race {
    constructor() {
        this.horses = [];
        this.winner = {};
    }

    createRace(horses) {
        this.horses = horses;
    }

    winnerParam(name, breed, distance) {
        this.winner.name = name;
        this.winner.breed = breed;
        this.winner.distance = distance;
    }

    runResult() {
        this.horses.forEach((participant) => {
            if (this.winner.distance <= participant.distance) {
                this.winnerParam(participant.name, participant.breed, participant.distance);
            }
            console.log(`${participant.name}, ${participant.breed}, ${participant.distance}`);
        });
    }

    startRace() {
        this.horses.forEach(participant => participant.run());
        this.winnerParam('', '', 0);

        const timeout = setInterval(() => {
            this.runResult();
        }, 2000);

        setTimeout(() => {
            this.horses.forEach(participant => participant.stop());
            clearInterval(timeout);
            console.log(`${this.winner.name}, ${this.winner.breed}, ${this.winner.distance}`);
        }, 10000);
    }
}

const race = new Race();
race.createRace(createArrayHorses());
race.startRace();
