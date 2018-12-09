const user = {};
Object.defineProperties(user, {
    fullName: {
        enumerable: true,
        configurable: true,
        writeble: true,
        set: (name) => {
            this.fullName = name
                .replace(/([[A-Za-z])\S/g, s => s.toLowerCase())
                .replace(/(^|\s|[-])\S/g, s => s.toUpperCase());
        },
        get: () => this.fullName,
    },
    phone: {
        enumerable: true,
        configurable: true,
        writeble: true,
        set: (num) => {
            this.phone = num
                .replace(/(?![/+])\D+/g, '');
        },
        get: () => this.phone,
    },
});
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);
user.phone = '+38(068)77-22-9-44';
console.log(user.phone);

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
        this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    }

    run() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
                console.log(this);
            }, 1000 * i);
        }
    }
}
class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const stabling = [
            { name: 'Apollo', breed: 'horses1' },
            { name: 'Augustus', breed: 'horses2' },
            { name: 'Aklon', breed: 'horses3' },
            { name: 'Antey', breed: 'horses4' },
            { name: 'Ahill', breed: 'horses5' },
            { name: 'Angel', breed: 'horses6' },
            { name: 'Aston', breed: 'horses7' },
            { name: 'Adonis', breed: 'horses8' },
            { name: 'Bella', breed: 'horses9' },
            { name: 'Bonita', breed: 'horses10' },
        ];
        stabling.forEach((element) => {
            this.horses.push(new Racer(element.name, element.breed));
        });
    }

    startRace() {
        this.horses.forEach(a => a.run());
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.horses.forEach((element) => {
                    console.log(element);
                });
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((a, b) => a.distance - b.distance);
            console.log(`Win horse: ${this.horses[0].name}`);
        }, 10000);
    }
}
const horseRacing = new Race();
horseRacing.createRace();
horseRacing.startRace();
