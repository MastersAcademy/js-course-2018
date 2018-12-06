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
        this.speed = Math.floor(Math.random() * (15 - 10 + 1) + 10);
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
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        this.horses.forEach(racer => racer.run());
                        for (let i = 1; i <= 5; i++) {
                            setTimeout(() => {
                                this.horses.forEach(racer => console.log(`Name: ${racer.name} Breed: ${racer.breed} Distance: ${racer.distance}`));
                            }, 2000 * i);
                        }
                    }, 0);
                    console.log('Go!');
                }, 400);
                console.log('Set');
            }, 300);
            console.log('Ready');
        }, 200);
        setTimeout(() => {
            console.log('Finish');
        }, 12000);
        setTimeout(() => {
            console.log('We have got 3 winners:');
            this.horses.sort((a, b) => b.distance - a.distance);
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        console.log(`Third place ... 
                Name: ${this.horses[2].name};
                Breed: ${this.horses[2].breed};
                Distance: ${this.horses[2].distance}.`);
                    }, 600);
                    console.log(`Second place ...  
                Name: ${this.horses[1].name};
                Breed: ${this.horses[1].breed};
                Distance: ${this.horses[1].distance}.`);
                }, 400);
                console.log(`First place ... 
                Name: ${this.horses[0].name};
                Breed: ${this.horses[0].breed};
                Distance: ${this.horses[0].distance}.`);
            }, 200);
        }, 13000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
