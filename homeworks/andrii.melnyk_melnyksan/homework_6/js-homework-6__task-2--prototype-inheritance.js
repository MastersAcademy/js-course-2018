// Task 6.2 Prototype Inheritance

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
        this.setSpeed();
    }

    setSpeed() {
        const min = 10;
        const max = 15;
        this.speed = Math.floor(Math.random() * (max - min + 1) + min);
    }

    run() {
        let timer = 1000;
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, timer);
            timer += 1000;
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const horseNames = ['Discharge', 'Lightning', 'Bolt', 'Turtle', 'Lame', 'Cutie',
            'Vanilla', 'Temper', 'Inner Light', 'Fender', 'Mockingbird', 'Black Shadow',
            'Symphony', 'Sea Wind', 'Grape', 'Dreamer', 'Black Star', 'Picasso', 'Shine',
            'Banjo', 'Dark Stalker', 'Starshine', 'Mustard', 'Blazer', 'Rally', 'Panda',
            'Serendipity', 'Sprout', 'Rococo', 'Hobbit', 'Gadget'];
        const horseBreeds = ['Thoroughbred', 'Quarter Horse', 'Arabian', 'Standardbred',
            'Appaloosa', 'Andalusian'];

        for (let i = 0; i < 10; i++) {
            const randomHorseNames = horseNames[Math.floor(Math.random() * 31)];
            const randomHorseBreeds = horseBreeds[Math.floor(Math.random() * 6)];

            this.horses.push(new Racer(randomHorseNames, randomHorseBreeds));
        }
    }

    startRace() {
        let timer = 2000;

        this.horses.forEach(racingHorse => racingHorse.run());

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log('\n');
                this.horses.forEach((racingHorse) => {
                    console.log(`${racingHorse.distance} - ${racingHorse.name} ${racingHorse.breed}`);
                });
            }, timer);
            timer += 2000;
        }
    }

    showResult() {
        const racingTime = 10000;
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`\nThe Winner is ${this.horses[0].name} ${this.horses[0].breed}\n`);
        }, racingTime);
    }
}

const race = new Race();
race.createRace();
race.startRace();
race.showResult();
