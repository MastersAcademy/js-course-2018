const horseName = ['Romeo', 'Sherbet', 'Mercury', 'Katie', 'Misty', 'Cheska', 'Nightflash', 'Ranger', 'Stryker', 'Altair'];
const horseBreed = ['Abtenauer', 'Augeron', 'Hirzai', 'Falabella', 'Lokai', 'Pottok', 'Morab', 'Sorraia', 'Zaniskari', 'Gidran'];

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

    horseSpeed() {
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }

    ride() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.horseSpeed();
                this.distance += this.speed;
            }, 1000 * i);
        }
    }
}
class Race {
    constructor() {
        this.horses = [];
    }

    initRace() {
        const raceMembers = [];
        for (let i = 0; i < horseName.length; i++) {
            const horse = new Horse(horseName[i], horseBreed[i]);
            raceMembers.push(horse);
        }
        raceMembers.forEach((horse) => {
            this.horses.push(new Racer(horse.name, horse.breed));
        });
    }

    startRace() {
        this.horses.forEach(horse => horse.ride());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                console.log(`${'Lap:'} ${i}`);
                this.horses.forEach(horse => console.log(horse));
            }, 2000 * i);
        }
    }

    finishRace() {
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`${this.horses[0].name} ${'wins!'}`);
        }, 10000);
    }
}
const race = new Race();
race.initRace();
race.startRace();
race.finishRace();
