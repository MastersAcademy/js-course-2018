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
        let time = 1000;
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, time);
            time += 1000;
        }
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * (15 - 10)) + 10;
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const horsesArray = [
            ['WAWOLD', 'Ardennes horse'],
            ['GARDINA', 'Colorado Ranger'],
            ['ANDIRULD', 'Dutch harness horse'],
            ['ALBETOLF', 'Gidran'],
            ['ISANGO', 'Holsteiner horse'],
            ['ABERY', 'Iomud'],
            ['LIAGONO', 'Karabair'],
            ['UVERAD', 'Kiger Mustang'],
            ['JOEZ', 'Latvian horse'],
            ['VIDARAD', 'Mangalarga'],
        ];
        horsesArray.forEach((elem) => {
            this.horses.push(new Racer(elem[0], elem[1]));
        });
    }

    startRace() {
        this.horses.forEach(elem => elem.run(this.runningTime));
        let time = 2000;
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.sort((a, b) => b.distance - a.distance);
                this.horses.forEach((elem) => {
                    console.log(`\n* Horse: ${elem.name}`);
                    console.log(`* Breed: ${elem.breed}`);
                    console.log(`* Distance: ${elem.distance}`);
                });
                console.log('\t___');
            }, time);
            time += 2000;
        }
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            if (this.horses[0].distance === this.horses[1].distance) {
                console.log('\n No winner!');
            } else {
                console.log(`\nWinner: ${this.horses[0].name}`);
                console.log(`Breed: ${this.horses[0].breed}`);
                console.log(`Distance: ${this.horses[0].distance}`);
            }
        }, 11000);
    }
}
const race = new Race();
race.createRace();
race.startRace();
