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
        const min = 10;
        const max = 15;
        this.speed = Math.random() * (max - min) + min;
    }

    run() {
        this.timerId = setInterval(() => {
            this.distance = this.distance + this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        if (this.timerId === undefined) {
            return;
        }
        clearInterval(this.timerId);
    }
}

const rasers = [
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
        this.horses.forEach((racer) => {
            racer.run();
        });
        this.timerId = setInterval(() => {
            this.horses.forEach((racer) => {
                console.log(`name: ${racer.name}, breed: ${racer.breed}, distance: ${racer.distance}`);
            });
        }, resultInterval * 1000);

        setTimeout(() => {
            clearInterval(this.timerId);
            this.printWinner();
            this.horses.forEach((racer) => {
                racer.stop();
            });
        }, time * 1000);
    }

    printWinner() {
        let winner = this.horses[0];

        for (let i = 1; i < this.horses.length; i++) {
            if (this.horses[i].distance > winner.distance) {
                winner = this.horses[i];
            }
        }
        console.log(`\n Winner: name: ${winner.name}, breed: ${winner.breed}, distance: ${winner.distance}`);
    }
}

const myRace = new Race();
myRace.createRace(rasers);
myRace.startRace(10, 2);
