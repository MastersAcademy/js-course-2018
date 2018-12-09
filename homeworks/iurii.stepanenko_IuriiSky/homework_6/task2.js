const infoHorses = [
    { name: 'Arnold', breed: 'Arabian' },
    { name: 'Schwarzenegger', breed: 'Quarter Horsee' },
    { name: 'Willard', breed: 'Thoroughbred' },
    { name: 'Smith', breed: 'Tennessee Walker' },
    { name: 'Johnny', breed: 'Morgan' },
    { name: 'Depp', breed: 'Falabella' },
    { name: 'Nicolas', breed: 'Paint' },
    { name: 'Cage', breed: 'Appaloosa' },
    { name: 'Keanu', breed: 'Warmblood' },
    { name: 'Reeves', breed: 'Andalusian' },
];

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
        let count = 0;
        this.timerId = setInterval(() => {
            this.distance = this.distance + this.speed;
            this.setSpeed();
            count++;
            if (count >= 10) {
                this.stop();
            }
        }, 1000);
    }

    stop() {
        if (this.timerId === undefined) {
            return;
        }
        clearInterval(this.timerId);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        infoHorses.forEach((element) => {
            const racer = new Racer(element.name, element.breed);
            racer.stop();
            this.horses.push(racer);
        });
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
        let maxDistanceIndex = 0;
        let maxDistance = 0;

        for (let i = 0; i < this.horses.length; i++) {
            if (this.horses[i].distance > maxDistance) {
                maxDistanceIndex = i;
                maxDistance = this.horses[i].distance;
            }
        }
        const winner = this.horses[maxDistanceIndex];
        console.log(`\n Winner: name: ${winner.name}, breed: ${winner.breed}, distance: ${winner.distance}`);
    }
}

const myRace = new Race();
myRace.createRace();
myRace.startRace(10, 2);
