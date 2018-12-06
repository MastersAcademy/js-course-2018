const RACER_MAX_SPEED = 15;
const RACER_MIN_SPEED = 10;

const RACER_DEFAULT_UPDATE_RATE = 1000;
const RACE_DEFAULT_UPDATE_RATE = 2000;
const RACE_DEFAULT_DURATION = 10000;

const RACERS_AMOUNT = 10;

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
        this.intervalID = null;
        this.setSpeed();
    }

    setSpeed() {
        const speedDifference = RACER_MAX_SPEED - RACER_MIN_SPEED;
        const randomSpeed = Math.random() * (speedDifference + 1) + RACER_MIN_SPEED;
        this.speed = Math.trunc(randomSpeed);
    }

    run() {
        if (this.intervalID === null) {
            this.intervalID = setInterval(this.update.bind(this), RACER_DEFAULT_UPDATE_RATE, this);
        } else {
            console.warn(`Racer "${this.name}" is already running`);
        }
    }

    update() {
        this.distance += this.speed;
        this.setSpeed();
    }

    stop() {
        if (this.intervalID === null) {
            console.warn(`Racer "${this.name}" is not running`);
            return;
        }
        clearInterval(this.intervalID);
        this.intervalID = null;
    }
}

class Race {
    constructor() {
        this.horseNames = ['Secretariat', 'President', 'Sheriff', 'Deputy', 'Lucky', 'Pecos', 'Colt', 'Horseshoe',
            'Barley', 'Bronco', 'Blazer', 'Wilbur', 'Buck', 'Franklin', 'Kentucky', 'Trigger', 'Blacksmith', 'Buckeye',
            'Bolt', 'Washington', 'Connecticut', 'Ironclad', 'King', 'Jockey', 'Clydesdale', 'Wrangler', 'Jupiter',
            'Tennessee', 'Texas', 'Diesel', 'Tank', 'Colorado', 'Ridgeline', 'Quarterback', 'Shoelace', 'Colonel',
            'Lincoln', 'Steeltoe', 'Officer', 'Rushmore'];
        this.horseBreeds = ['Arabian', 'Quarter Horse', 'Thoroughbred', 'Tennessee Walker', 'Morgan', 'Paint',
            'Appaloosa', 'Miniature Horse', 'Warmblood', 'Andalusian'];

        this.horses = [];
        this.logIntervalID = null;
    }

    createRace() {
        for (let i = 0; i < RACERS_AMOUNT; i++) {
            const rndName = this.horseNames[Math.trunc(Math.random() * this.horseNames.length)];
            const rndBreed = this.horseBreeds[Math.trunc(Math.random() * this.horseBreeds.length)];
            this.horses.push(new Racer(rndName, rndBreed));
        }
        return this;
    }

    startRace() {
        console.log('\n--- START ---\n');
        this.horses.forEach(horse => horse.run());
        this.logIntervalID = setInterval(this.logRace.bind(this), RACE_DEFAULT_UPDATE_RATE);
        setTimeout(this.endRace.bind(this), RACE_DEFAULT_DURATION);
    }

    logRace() {
        this.horses.forEach((horse) => {
            console.log(`${horse.distance} - ${horse.name} ${horse.breed}`);
        });
        console.log();
    }

    endRace() {
        if (this.logIntervalID === null) {
            console.warn('Race hasn\'t been started');
            return;
        }
        clearInterval(this.logIntervalID);

        this.horses.forEach(horse => horse.stop());
        this.logResult();
        this.logRace();
    }

    logResult() {
        console.log('--- FINISH ---\n');
        this.horses.sort((left, right) => right.distance - left.distance);
        console.log(`The winner is: ${this.horses[0].name}\n`);
    }
}

new Race().createRace().startRace();
