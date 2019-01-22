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
        this.t1 = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stopHorse() {
        clearInterval(this.t1);
    }

    setSpeed() {
        const min = 10;
        const max = 15;
        this.speed = Math.floor((Math.random() * (max - min + 1)) + min);
    }
}
class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const arrayOfHorses = [
            { name: 'Elida', breed: 'Arabian' },
            { name: 'Cofone', breed: 'Quarter Horse' },
            { name: 'Diomede', breed: 'Thoroughbred' },
            { name: 'Giovanni', breed: 'Augeron' },
            { name: 'Bavier', breed: 'Morgan' },
            { name: 'Enriquez', breed: 'Paint' },
            { name: 'Keenan', breed: 'Appaloosa' },
            { name: 'Zachery', breed: 'Warmblood' },
            { name: 'Julia', breed: 'Andalusian' },
            { name: 'Carrin', breed: 'Salerno horse' },
        ];
        arrayOfHorses.forEach((value) => {
            this.horses.push(new Racer(value.name, value.breed));
        });
    }

    startRace() {
        this.horses.forEach(racer => racer.run());

        const t2 = setInterval(() => {
            this.horses.forEach((value) => {
                console.log(`Horse: ${value.name}; Breed: ${value.breed}; Distance: ${value.distance}`);
            });
        }, 2000);
        setTimeout(() => {
            clearInterval(t2);
        }, 10000);
    }

    finishRace() {
        setTimeout(() => {
            this.horses.forEach(stopHorse => stopHorse.stopHorse());
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`Winner: ${this.horses[0].name}, ${this.horses[0].breed}`);
        }, 10000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
race.finishRace();
