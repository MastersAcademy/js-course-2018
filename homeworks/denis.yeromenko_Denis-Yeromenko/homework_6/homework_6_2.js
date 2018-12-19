
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
        this.speed = Math.floor(Math.random() * 6 + 10);
    }

    run() {
        for (let i = 1; i <= 10; i++) {
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
        const participants = [
            { name: 'Apache', breed: 'Thoroughbred' },
            { name: 'Bucefall', breed: 'Arabian horse' },
            { name: 'Flash', breed: 'Quarter Horse' },
            { name: 'Ginger', breed: 'Quarter Horse' },
            { name: 'Pigasus', breed: 'Arabian horse' },
            { name: 'Snowball', breed: 'Thoroughbred' },
            { name: 'Spirit', breed: 'Quarter Horse' },
            { name: 'Star-Dust', breed: 'Thoroughbred' },
            { name: 'Tornado', breed: 'Thoroughbred' },
            { name: 'White-Spot', breed: 'Arabian horse' },
        ];
        participants.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        console.log('Ready?');
        setTimeout(() => {
            console.log('GO!');
            this.horses.forEach(racer => racer.run());
            for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    this.horses.forEach(racer => console.log(`Name:    ${racer.name}  |  Breed:    ${racer.breed}  |  Distance:    ${racer.distance}`));
                }, 2000 * i);
            }
            setTimeout(() => {
                console.log(' ======= Finish! ======= ');
                this.horses.sort((a, b) => b.distance - a.distance);
                console.log(` * * * WINNER * * *
                Name: ${this.horses[0].name}
                Breed: ${this.horses[0].breed}
                Distance : ${this.horses[0].distance}`);
            }, 11000);
        }, 2000);
    }
}
const race = new Race();
race.createRace();
race.startRace();
