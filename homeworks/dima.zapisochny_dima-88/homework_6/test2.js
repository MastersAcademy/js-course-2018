
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
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        this.timeout = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    clear() {
        clearInterval(this.timeout);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    create(horsesArray) {
        this.horses = horsesArray;
    }

    start() {
        this.horses.forEach(horse => horse.run());
        this.resultRace = setInterval(() => {
            this.horses.forEach((horse) => {
                console.log(`\n* Horse: ${horse.name}`);
                console.log(`* Breed: ${horse.breed}`);
                console.log(`* Distance: ${horse.distance}`);
            });
            console.log('__');
        }, 2000);
    }

    stop() {
        setTimeout(() => {
            clearInterval(this.resultRace);
            this.horses.forEach(horse => horse.clear());
            this.horses.sort((a, b) => b.distance - a.distance);
            if (this.horses[0].distance === this.horses[1].distance) {
                console.log('\n No winner!');
            } else {
                console.log(`\nWinner: ${this.horses[0].name}`);
                console.log(`Breed: ${this.horses[0].breed}`);
                console.log(`Distance: ${this.horses[0].distance}`);
            }
        }, 10000);
    }
}

const horsesArray = [
    new Racer('WAWOLD', 'Ardennes horse'),
    new Racer('GARDINA', 'Colorado Ranger'),
    new Racer('ANDIRULD', 'Dutch harness horse'),
    new Racer('ALBETOLF', 'Gidran'),
    new Racer('ISANGO', 'Holsteiner horse'),
    new Racer('ABERY', 'Iomud'),
    new Racer('LIAGONO', 'Karabair'),
    new Racer('UVERAD', 'Kiger Mustang'),
    new Racer('JOEZ', 'Latvian horse'),
    new Racer('VIDARAD', 'Mangalarga'),
];

const race = new Race();
race.create(horsesArray);
race.start();
race.stop();
