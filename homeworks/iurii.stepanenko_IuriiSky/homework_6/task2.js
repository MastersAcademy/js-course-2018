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
        this.setSpeed();
    }

    setSpeed() {
        this.speed = Math.random() * (15 - 10) + 10;
    }

    run() {
        this.timerId = setInterval(() => {
            this.distance = this.distance + this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        if (this.timerId) clearInterval(this.timerId);
    }
}

const racersHorse = [
    new Racer('Arnold', 'Arabian'),
    new Racer('Schwarzenegger', 'Quarter Horsee'),
    new Racer('Willard', 'Thoroughbred'),
    new Racer('Smith', 'Tennessee Walker'),
    new Racer('Johnny', 'Morgan'),
    new Racer('Depp', 'Falabella'),
    new Racer('Nicolas', 'Paint'),
    new Racer('Cage', 'Appaloosa'),
    new Racer('Keanu', 'Warmblood'),
    new Racer('Reeves', 'Andalusian'),
];

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(racers) {
        this.horses = racers;
    }

    startRace(time, resultInterval) {
        this.horses.forEach(racer => racer.run());
        this.timerId = setInterval(() => {
            this.logRacersState();
        }, resultInterval * 1000);

        setTimeout(() => {
            clearInterval(this.timerId);
            this.printWinner();
            this.horses.forEach(racer => racer.stop());
        }, time * 1000);
    }

    logRacersState() {
        this.horses.forEach(racer => console.log(`name: ${racer.name}, breed: ${racer.breed}, distance: ${racer.distance}`));
    }

    getWinner() {
        let winner = this.horses[0];
        this.horses.forEach((horse) => {
            if (horse.distance > winner.distance) {
                winner = horse;
            }
        });
        return winner;
    }

    printWinner() {
        const winner = this.getWinner();
        console.log(`\n Winner: name: ${winner.name}, breed: ${winner.breed}, distance: ${winner.distance}`);
    }
}

const myRace = new Race();
myRace.createRace(racersHorse);
myRace.startRace(10, 2);
