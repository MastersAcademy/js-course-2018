
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

    setSpeed() {
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        this.timeout = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        clearInterval(this.timeout);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const horsesArray = [
            { name: 'WAWOLD', breed: 'Ardennes horse' },
            { name: 'GARDINA', breed: 'Colorado Ranger' },
            { name: 'ANDIRULD', breed: 'Dutch harness horse' },
            { name: 'ALBETOLF', breed: 'Gidran' },
            { name: 'ISANGO', breed: 'Holsteiner horse' },
            { name: 'ABERY', breed: 'Iomud' },
            { name: 'LIAGONO', breed: 'Karabair' },
            { name: 'UVERAD', breed: 'Kiger Mustang' },
            { name: 'JOEZ', breed: 'Latvian horse' },
            { name: 'VIDARAD', breed: 'Mangalarga' },
        ];
        horsesArray.forEach((elem) => {
            this.horses.push(new Racer(elem.name, elem.breed));
        });
    }

    startRace() {
        this.horses.forEach(elem => elem.run());
        const timeout = setInterval(() => {
            this.horses.forEach((elem) => {
                console.log(`\n* Horse: ${elem.name}`);
                console.log(`* Breed: ${elem.breed}`);
                console.log(`* Distance: ${elem.distance}`);
            });
        }, 2000);

        setTimeout(() => {
            clearInterval(timeout);
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
const race = new Race();
race.createRace();
race.startRace();
