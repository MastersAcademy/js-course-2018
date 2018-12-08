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
        this.setSpeed();
    }
     setSpeed() {
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }
     run() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }
}
 class Race {
    constructor() {
        this.horses = [];
    }
     createRace() {
        const hippodrome = [
            { name: 'Magic', breed: 'Iberian' },
            { name: 'Pirate', breed: 'Arabian' },
            { name: 'Dream', breed: 'Friesian' },
            { name: 'Tracey', breed: 'Pony' },
            { name: 'Chocolate', breed: 'Zebra' },
            { name: 'Charles', breed: 'Mustang' },
            { name: 'Tornado', breed: 'Iberian' },
            { name: 'Pandora', breed: 'Arabian' },
            { name: 'Ben', breed: 'Mustang' },
            { name: 'Joker', breed: 'Gonter' },
        ];
         hippodrome.forEach((element) => {
            this.horses.push(new Racer(element.name, element.breed));
        });
    }
     startRace() {
        this.horses.forEach(element => element.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(element => console.log(element));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((element1, element2) => element2.distance - element1.distance);
            console.log(`Сongratulations: ${this.horses[0].name}`);
        }, 10000);
    }
}
const horseRun = new Race();
horseRun.createRace();
horseRun.startRace();