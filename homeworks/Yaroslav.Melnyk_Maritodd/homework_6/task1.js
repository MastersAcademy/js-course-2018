// task_1

const user = {

    get fullname() {
        return this.firstName;
    },
    set fullname(newFullname) {
        this.firstName = newFullname.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    },
    get phone() {
        return this.number;
    },
    set phone(newNumber) {
        this.number = newNumber.match(/^|\d/g).join('');
    },
};
user.fullname = 'aNna-mAria joHNs';
console.log(user.fullname);
user.phone = '+38(096)-111b22+33';
console.log(user.phone);

// task_2

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
        this.speed = Math.floor(Math.random() * 5) + 10;
    }

    run() {
        for (let i = 0; i < 10; i++) {
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
        const racers = [
            { name: 'Horse1', breed: 'Arabian' },
            { name: 'Horse2', breed: 'Mustang' },
            { name: 'Horse3', breed: 'Turkoman' },
            { name: 'Horse4', breed: 'American' },
            { name: 'Horse5', breed: 'Appaloosa' },
            { name: 'Horse6', breed: 'Nokota' },
            { name: 'Horse7', breed: 'Morgan' },
            { name: 'Horse8', breed: 'Shire' },
            { name: 'Horse9', breed: 'Belgian' },
            { name: 'Horse10', breed: 'Saddler' },
        ];
        racers.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }

    startRace() {
        this.horses.forEach(racer => racer.run());
        for (let i = 0; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(racer => console.log(racer));
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((x, y) => y.distance - x.distance);
            console.log(`****Winner is: ${this.horses[0].name}; Breed: ${this.horses[0].breed}; Distance: ${this.horses[0].distance}; Speed: ${this.horses[0].speed}.****`);
        }, 10500);
    }
}

const start = new Race();
start.createRace();
start.startRace();
