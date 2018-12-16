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
        for (let i = 1000; i <= 10000; i += 1000) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, i);
        }
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
        this.horses.forEach(e => e.run());
        for (let i = 2000; i <= 10000; i += 2000) {
            setTimeout(() => {
                console.log(`---Race information (after ${i / 1000} seconds)---`);
                this.horses.forEach((e) => {
                    console.log(`Name: ${e.name}, distance: ${e.distance}`);
                });
                if (i === 10000) {
                    this.horses.sort((a, b) => b.distance - a.distance);
                    console.log(`The winner is ${this.horses[0].name}, distance: ${this.horses[0].distance}`);
                }
            }, i);
        }
    }
}

const race = new Race();
race.createRace();
race.startRace();
