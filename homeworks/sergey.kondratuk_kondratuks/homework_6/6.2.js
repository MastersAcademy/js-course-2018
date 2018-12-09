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
            { name: 'Zia', breed: 'Akhal' },
            { name: 'Star', breed: 'Chilean' },
            { name: 'Jadviga', breed: 'Azores' },
            { name: 'Wendy', breed: 'Friesian' },
            { name: 'Fair', breed: 'French' },
            { name: 'Jamaica', breed: 'Pony' },
            { name: 'Zoria', breed: 'Arabian' },
            { name: 'Vanessa', breed: 'Belgian' },
            { name: 'Veig', breed: 'Zebra' },
            { name: 'Berry', breed: 'Percheron' },
        ];
        readyHorses.forEach((horse) => {
            this.horses.push(new Racer(horse.name, horse.breed));
        });
    }

    startRace() {
        this.horses.forEach(info => info.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(info => console.log(`Name: ${info.name}; Breed: ${info.distance}`));
            }, 2000 * i);
        }
    }

    finishRace() {
        setTimeout(() => {
            this.horses.sort((o1, o2) => o2.distance - o1.distance);
            console.log(`The horse that came first:
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
