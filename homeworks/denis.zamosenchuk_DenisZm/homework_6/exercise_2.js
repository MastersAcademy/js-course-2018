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
        const minSpeed = 10;
        const maxSpeed = 15;
        this.speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1) + minSpeed);
    }

    run() {
        this.timerId = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horses) {
        for (let i = 0; i < horses.length; i++) {
            this.horses.push(new Racer(horses[i].name, horses[i].breed));
        }
    }

    startRace() {
        this.horses.forEach(horse => horse.run());

        this.timerId = setInterval(() => {
            this.horses.forEach(horse => Race.showStat(horse));
            console.log('---');
        }, 2000);

        setTimeout(() => {
            this.horses.forEach(horse => clearInterval(horse.timerId));
            clearInterval(this.timerId);
            this.horses.forEach(horse => Race.showStat(horse));
            const winner = this.horses
                .reduce((prev, curr) => (prev.distance > curr.distance ? prev : curr));
            console.log('\nThe winner is:');
            Race.showStat(winner);
        }, 10000);
    }

    static showStat(horse) {
        console.log(`${horse.name} (${horse.breed}) :\t${horse.distance}`);
    }
}

const horses = [
    { name: 'Moon Dreamer', breed: 'Quarter Horse' },
    { name: 'Calisto', breed: 'Arabian' },
    { name: 'Cosmic Aura', breed: 'Thoroughbred' },
    { name: 'Rain Shadow', breed: 'Black Forest' },
    { name: 'Mystic', breed: 'Appaloosa' },
    { name: 'Red Ribbon', breed: 'Thoroughbred' },
    { name: 'Breezy', breed: 'Andalusian' },
    { name: 'Silent Wing', breed: 'Thoroughbred' },
    { name: 'Candle Flame', breed: 'Arabian' },
    { name: 'Cloud Kicker', breed: 'Black Forest' },
];

const race = new Race();
race.createRace(horses);
race.startRace();
