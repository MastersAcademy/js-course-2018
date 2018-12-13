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
        const allHorses = [{ name: 'Agape', breed: 'Jutland horse' },
            { name: 'Gina', breed: 'Lithuanian Heavy Draught' },
            { name: 'Darcy', breed: 'Novokirghiz' },
            { name: 'Wriggley', breed: 'Morab' },
            { name: 'Nelly', breed: 'Russian Don' },
            { name: 'Seyton', breed: 'San Fratello' },
            { name: 'Nor', breed: 'Sorraia' },
            { name: 'Gloryl', breed: 'Quarab' },
            { name: 'Aida', breed: 'Messara' },
            { name: 'Deputy', breed: 'Warlander' }];
        allHorses.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        console.log('Start');
        this.horses.forEach(racer => racer.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(racer => console.log(`Name: ${racer.name} Breed: ${racer.breed} Distance: ${racer.distance}`));
            }, 2000 * i);
        }
        setTimeout(() => {
            console.log('Finish');
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`First place ... 
            Name: ${this.horses[0].name};
            Breed: ${this.horses[0].breed};
            Distance: ${this.horses[0].distance}.`);
        }, 11000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
