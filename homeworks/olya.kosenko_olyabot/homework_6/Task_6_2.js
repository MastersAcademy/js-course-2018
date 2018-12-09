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
        const t1 = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
        setTimeout(() => {
            clearInterval(t1);
        }, 10000);
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
            ['Elida', 'Arabian'],
            ['Cofone', 'Quarter Horse'],
            ['Diomede', 'Thoroughbred'],
            ['Giovanni', 'Augeron'],
            ['Bavier', 'Morgan'],
            ['Enriquez', 'Paint'],
            ['Keenan', 'Appaloosa'],
            ['Zachery', 'Warmblood'],
            ['Julia', 'Andalusian'],
            ['Carrin', 'Salerno horse'],
        ];
        arrayOfHorses.forEach((value) => {
            this.horses.push(new Racer(value[0], value[1]));
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
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`Winner: ${this.horses[0].name}, ${this.horses[0].breed}`);
        }, 10000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
race.finishRace();
