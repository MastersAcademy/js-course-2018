const horsName = ['Jake', 'Coco', 'Max', 'Rain', 'Star', 'Misty', 'Blaze', 'Lucky', 'Lily', 'Duke'];
const horsBreed = ['Arabian', 'Quarter', 'Thoroughbred', 'Tennessee', 'Morgan', 'Paint', 'Appaloosa', 'Miniature', 'Warmblood', 'Andalusian'];

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
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }

    run() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.setSpeed();
                this.distance += this.speed;
            }, 1000 * i);
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    crearRace() {
        for (let i = 0; i <= horsName.length - 1; i++) {
            this.name = horsName[i];
            this.breed = horsBreed[i];
            this.horses.push(new Racer(this.name, this.breed));
        }
    }

    startRace() {
        console.log('Sratr!');
        this.horses.forEach(hors => hors.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                console.log(`${'Circle:'}${' '}${i}`);
                this.horses.forEach(hors => console.log(hors));
            }, 2000 * i);
        }
    }

    finishRace() {
        setTimeout(() => {
            console.log('Finish!');
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`${'Winer is'}${' '}${this.horses[0].name}`);
        }, 1010 * 10);
    }
}

const Race1 = new Race();

Race1.crearRace();
Race1.startRace();
Race1.finishRace();
