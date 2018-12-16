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
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 16);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const readyHorses = [
            { name: 'Alex', breed: 'Arabian' },
            { name: 'George', breed: 'Azores' },
            { name: 'Brad', breed: 'Aztec' },
            { name: 'Christian', breed: 'Belgian' },
            { name: 'Paul', breed: 'Kazakh' },
            { name: 'Spike', breed: 'Latvian' },
            { name: 'James', breed: 'Tatarian' },
            { name: 'Nicholas', breed: 'Chilean' },
            { name: 'Tim', breed: 'French' },
            { name: 'Johny', breed: 'Canadian' },
        ];
        readyHorses.forEach((horse) => {
            this.horses.push(new Racer(horse.name, horse.breed));
        });
    }

    startRace() {
        this.horses.forEach(info => info.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(info => console.log(`Name: ${info.name}; Breed: ${info.breed}; Distance: ${info.distance}`));
            }, 2000 * i);
        }
    }

    finishRace() {
        setTimeout(() => {
            this.horses.sort((o1, o2) => o2.distance - o1.distance);
            console.log(`The winner of the race: 
        Name: ${this.horses[0].name}
        Breed: ${this.horses[0].breed}
        Distance: ${this.horses[0].distance}`);
        }, 11000);
    }
}

const race = new Race();

race.createRace();
race.startRace();
race.finishRace();
