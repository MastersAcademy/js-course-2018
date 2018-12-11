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

    run() {
        const intervalChangeSpeed = 1000;

        this.timerId = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, intervalChangeSpeed);
    }

    setSpeed() {
        const MIN = 10;
        const MAX = 15;
        const random = (min, max) => min + Math.random() * (max - min);
        this.speed = random(MIN, MAX);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace(horses) {
        const horsesAmount = 10;

        for (let i = 0; i < horsesAmount; i++) {
            this.horses.push(new Racer(horses[i].name, horses[i].breed));
        }
    }

    startRace() {
        const intervalDisplayInfo = 2000;
        const durationRace = 10000;

        this.horses.forEach(horse => horse.run());

        this.timerId = setInterval(() => {
            console.table(
                this.horses.map(horse => ({
                    name: horse.name,
                    breed: horse.breed,
                    distance: horse.distance,
                })),
            );
        }, intervalDisplayInfo);

        setTimeout(() => {
            this.horses.forEach(horse => clearInterval(horse.timerId));
            clearInterval(this.timerId);
            const winner = this.horses.reduce((a, b) => (b.distance > a.distance ? b : a));
            console.log(
                'Winner is:\n',
                `name: ${winner.name}\n`,
                `breed: ${winner.breed}\n`,
                `distance: ${winner.distance}`,
            );
        }, durationRace);
    }
}

const horses = [
    { name: 'Loris', breed: 'Moroccan Barb' },
    { name: 'Keeble', breed: 'Australian Stock Horse' },
    { name: 'Graetz', breed: 'Percheroon' },
    { name: 'Mikel', breed: 'Holsteiner' },
    { name: 'Clark', breed: 'Haflinger' },
    { name: 'Edwardo', breed: 'Andalusian' },
    { name: 'Loni', breed: 'Azteca' },
    { name: 'Pillo', breed: 'Criollo' },
    { name: 'Easter', breed: 'Paso Fino' },
    { name: 'Daisy', breed: 'Canadian' },
];

const race = new Race();
race.createRace(horses);
race.startRace();
