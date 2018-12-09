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
        this.speed = Math.floor(Math.random() * 16);
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
        const group = [
            { name: 'Svidetel Bars', breed: 'Thoroughbred' },
            { name: 'Zapret', breed: 'Thoroughbred' },
            { name: 'Yunifayt', breed: 'Thoroughbred' },
            { name: 'Soposto', breed: 'Thoroughbred' },
            { name: 'Polkovnik', breed: 'Thoroughbred' },
            { name: 'Mixfine', breed: 'Thoroughbred' },
            { name: 'Kingdom Bars', breed: 'Thoroughbred' },
            { name: 'Shturman', breed: 'Thoroughbred' },
            { name: 'Pour Dio', breed: 'Thoroughbred' },
            { name: 'Symphoniya Vetra', breed: 'Thoroughbred' },
        ];

        group.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        console.log('Race started');
        this.horses.forEach(racer => racer.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(racer => console.log(`Name: ${racer.name}, Breed: ${racer.breed}, Distance: ${racer.distance}`));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log('Race finished');
            console.log(`Winner: ${this.horses[0].name}, Breed: ${this.horses[0].breed}, Distance: ${this.horses[0].distance}`);
        }, 11000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
