// task 2

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
        this.speed = Math.random() * (15 - 10) + 10;
    }

    run() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const nickHorses = [
            { name: 'Dusik', breed: 'Shayr' },
            { name: 'Petro', breed: 'Mustang' },
            { name: 'Ivan', breed: 'Tunk' },
            { name: 'Nikolay', breed: 'BMW' },
            { name: 'Vasya', breed: 'Transformer' },
            { name: 'Lexa', breed: 'Lolo' },
            { name: 'Soyuz', breed: 'Pepe' },
            { name: 'Pushok', breed: 'Juggernaut' },
            { name: 'Dyadya', breed: 'Jiguli' },
            { name: 'Pudel', breed: 'Peugeot' },
        ];
        nickHorses.forEach((element) => {
            this.horses.push(new Racer(element.name, element.breed));
        });
    }

    startRace() {
        this.horses.forEach(element => element.run());
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.horses.forEach(element => console.log(element));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((start, end) => end.distance - start.distance);
            console.log(`Congratulation ${this.horses[0].name} -- ${this.horses[0].breed}. He ran ${Math.floor(this.horses[0].distance)} meters in 10 seconds!!!`);
        }, 10000);
    }
}
const derby = new Race();
derby.createRace();
derby.startRace();
