const HORSES = ['Axe', 'Handzo', 'Zeus', 'Morty', 'Rick', 'Bot', 'Geralt', 'Gaben', 'Artanis', 'Hideo'];
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
    }

    run() {
        setTimeout(() => {
            this.speed = this.setSpeed();
            this.distance += this.speed;
            this.run();
        }, 1000);
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 6 + 10);
    }
}
class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horsesArray) {
        horsesArray.forEach((e) => {
            const horse = new Horse(e, 'skakun');
            this.horses.push(horse);
        });
    }

    startRace() {
        this.initialTime = 0;
        if (this.initialTime < 10) {
            setTimeout(() => {
                this.horses.forEach(() => {
                    Racer.run();
                    console.log(`The horse ${this.name} aka ${this.breed} ran ${this.distance} meters.`);
                });
            }, 2000);
            this.initialTime += 2;
        } else {
            // console.log("Winner....")
        }
    }
}
const race = new Race();
race.createRace(HORSES);
race.startRace();
