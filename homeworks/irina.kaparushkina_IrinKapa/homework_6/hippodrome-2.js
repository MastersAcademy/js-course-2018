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
        this.run();
    }

    setSpeed() {
        this.speed = Math.random() * 6 + 10;
    }

    run() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.setSpeed();
                this.distance += this.speed;
            }, (i * 1000));
        }
    }
}
class Race {
    constructor() {
        this.horses = [];
        this.startRace();
    }

    createRace() {
        const horsesName = [
            ['Adele', 'Arabian thoroughbred'],
            ['Squirrel', 'Arabian thoroughbred'],
            ['Julie', 'Standardbreds'],
            ['Emerald', 'American Quarter Horses'],
            ['Napoleon', 'Standardbreds'],
            ['Queen', 'American Quarter Horses'],
            ['Luck', 'Standardbreds'],
            ['Adonis', 'Standardbreds'],
            ['Orchid', 'Arabian thoroughbred'],
            ['Leon', 'American Quarter Horses'],
        ];
        horsesName.forEach((elem) => { this.horses.push(new Racer(elem[0], elem[1])); });
    }

    startRace() {
        this.horses.forEach(match => match.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(match => console.log(match));
            }, (i * 2000));
        }
    }

    winner() {
        setTimeout(() => {
            this.horses.sort((elem1, elem2) => elem2.distance - elem1.distance);
            console.log(`Winner: ${this.horses[0].name} ${this.horses[0].breed} ${this.horses[0].distance}`);
        }, 10000);
    }
}
const running = new Race();
running.createRace();
running.startRace();
running.winner();
