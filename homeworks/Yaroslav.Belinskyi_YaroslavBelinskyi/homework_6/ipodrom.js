const HORSES = ['Axe', 'Handzo', 'Roach', 'Morty', 'Rick', 'Bot', 'Geralt', 'Gaben', 'Artanis', 'Hideo'];
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
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
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
            const horse = new Racer(e, '"skakun"');
            this.horses.push(horse);
        });
    }

    startRace() {
        this.horses.forEach(e => e.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                console.log('----------');
                this.horses.forEach((e) => {
                    console.log(`The horse -- ${e.name} - ${e.breed} - has last speed: ${e.speed} and ran ${e.distance} meters.`);
                });
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`The winner is: ${this.horses[0].name}!!!`);
        }, 10000);
    }
}
const race = new Race();
race.createRace(HORSES);
race.startRace();
