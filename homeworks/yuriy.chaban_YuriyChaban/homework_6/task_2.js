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
        this.minRange = 10;
        this.maxRange = 15;
        this.numberOfHorses = 10;
    }

    run() {
        for (let i = 0; i < this.numberOfHorses; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * (this.maxRange - this.minRange)) + this.minRange;
    }
}

class Race {
    constructor() {
        this.horses = [];
        this.raceTime = 10000;
    }

    createRace() {
        const horsesNameAndBreed = [
            {
                name: 'Jackeroo',
                breed: 'American Quarter Horse',
            },
            {
                name: 'Lucky Fat',
                breed: 'Arabians',
            },
            {
                name: 'Son of a Gun',
                breed: 'Thoroughbreds',
            },
            {
                name: 'Mad Max',
                breed: 'Appaloosa',
            },
            {
                name: 'Noisy Boy',
                breed: 'Warmbloods',
            },
            {
                name: 'Rap Major',
                breed: 'The Morgan Horse',
            },
            {
                name: 'Valerka',
                breed: 'Grade Horses',
            },
            {
                name: 'Half of the sixth',
                breed: 'Gaited Breeds',
            },
            {
                name: 'Cover Girl',
                breed: 'Draft Breeds',
            },
            {
                name: 'Zhirniy Drisch',
                breed: 'Harry Potter',
            },
        ];

        horsesNameAndBreed.forEach((horse) => {
            this.horses.push(new Racer(horse.name, horse.breed));
        });
    }

    startRace() {
        this.horses.forEach(horse => horse.run());

        const raceInterval = setInterval(() => {
            console.log('\nRace round\n');
            this.horses.forEach(horse => console.log(`horse name: ${horse.name}, horse breed: ${horse.breed}, distance: ${horse.distance}`));
        }, 2000);

        setTimeout(() => {
            clearInterval(raceInterval);
            this.horses.sort((horseA, horseB) => horseB.distance - horseA.distance);
            console.log('\nThe winner is a horse with a name: ', this.horses[0].name);
        }, this.raceTime);
    }
}


const startANewRacing = new Race();
startANewRacing.createRace();
startANewRacing.startRace();
