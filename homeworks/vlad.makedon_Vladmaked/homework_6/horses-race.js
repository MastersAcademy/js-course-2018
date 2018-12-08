const intervalIds = [];

const horseNames = ['Pecos', 'Colt', 'Horseshoe', 'Barley', 'Bronco', 'Blazer', 'Wilbur', 'Buck',
    'Franklin', 'Kentucky', 'Trigger', 'Blacksmith', 'Buckeye', 'Bolt', 'Washington', 'Connecticut',
    'Ironclad', 'King', 'Jockey', 'Clydesdale', 'Wrangler', 'Jupiter', 'Tennessee', 'Texas', 'Diesel',
    'Tank', 'Colorado', 'Ridgeline', 'Quarterback', 'Shoelace', 'Colonel', 'Lincoln', 'Steeltoe', 'Officer',
    'Rushmore', 'Ellie', 'Peanut', 'River', 'Marmalade', 'Nutmeg', 'Piper', 'Gypsy', 'Butterscotch', 'Clover',
    'Sadie', 'Sassy', 'Bailey', 'Skydancer', 'Daisy', 'Strawberry', 'Kennedy', 'Morgan', 'Nightmare', 'Magnolia',
    'Mustang Sally', 'Hollyhock', 'Aster', 'Molly', 'Willow', 'Meadow', 'Ladybird', 'Carolina', 'Wisteria', 'Cherish',
    'Rosette', 'Midsummer', 'Amethyst', 'Eleanor', 'Juliet', 'Jasmine', 'Velvet', 'Big Mama', 'Temperance'];
const horseBreeds = ['Thoroughbred', 'American Quarter Horse', 'Arabian Horse', 'Paint Horse', 'Appaloosa'];

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
        this.setSpeed();
    }

    run() {
        intervalIds.push(setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000));
    }

    setSpeed() {
        this.speed = Math.random() * 5 + 10;
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        for (let i = 0; i < 10; i++) {
            this.horses.push(new Racer(
                horseNames[Math.floor(Math.random() * horseNames.length)],
                horseBreeds[Math.floor(Math.random() * horseBreeds.length)],
            ));
        }
    }

    startRace() {
        let time = 0;
        this.horses.forEach(e => e.run());
        intervalIds.push(setInterval(() => {
            time += 2;
            console.log(`---Race information (after ${time} seconds)---`);
            this.horses.forEach((e) => {
                console.log(`Name: ${e.name}, distance: ${e.distance}`);
            });
            if (time >= 10) {
                intervalIds.forEach(e => clearInterval(e));
                let maxValue = 0;
                let maxIndex = 0;
                this.horses.forEach((e, index) => {
                    maxIndex = (e.distance > maxValue) ? index : maxIndex;
                    maxValue = (e.distance > maxValue) ? e.distance : maxValue;
                });
                console.log(`The winner is ${this.horses[maxIndex].name}, distance: ${maxValue}`);
            }
        }, 2000));
    }
}

const race = new Race();
race.createRace();
race.startRace();
