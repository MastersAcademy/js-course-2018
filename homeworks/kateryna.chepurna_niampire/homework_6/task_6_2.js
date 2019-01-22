class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}
class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.valueSpeed();
        this.speed = 0;
        this.distance = 0;
    }

    valueSpeed() {
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }

    run() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.valueSpeed();
            }, 1000 * i);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const derby = [
            { name: 'Mery', breed: 'Giraffe' },
            { name: 'Santa', breed: 'Pony' },
            { name: 'Flameboy', breed: 'Mustang' },
            { name: 'Rain', breed: 'Unicorn' },
            { name: 'Hell', breed: 'Akhaltekinsky' },
            { name: 'Lucy', breed: 'Arabian' },
            { name: 'Happy', breed: 'Mustang' },
            { name: 'Indian', breed: 'Hanoverian' },
            { name: 'Flash', breed: 'Arabian' },
            { name: 'Mad', breed: 'Akhaltekinsky' },
        ];
        derby.forEach((elem) => {
            this.horses.push(new Racer(elem.name, elem.breed));
        });
    }

    startRace() {
        this.horses.forEach(elem => elem.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                const numberRace = i * 2;
                console.log(`Time:  ${numberRace} s`);
                this.horses.forEach(elem => console.log(elem));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((min, max) => max.distance - min.distance);
            console.log(`Winner this race: '${this.horses[0].name}' - ${this.horses[0].breed}  Distance: ${this.horses[0].distance}`);
        }, 10000);
    }
}
const horseRacing = new Race();
horseRacing.createRace();
horseRacing.startRace();
