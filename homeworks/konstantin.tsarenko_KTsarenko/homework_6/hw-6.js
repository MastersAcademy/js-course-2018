
// task 1

const obj = {

    get fullName() {
        return this.valueFullName;
    },

    set fullName(value) {
        this.valueFullName = value.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    },

    get phone() {
        return this.valuePhone;
    },

    set phone(value) {
        this.valuePhone = value.match(/^\+|\d/g).join('');
    },
};

obj.fullName = 'aNna-mAria joHNs';
console.log(obj.fullName);

obj.phone = '‎‎+380(067)440-20-57';
console.log(obj.phone);

// task 2

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
        this.speed = this.setSpeed();
    }

    setSpeed() {
        this.min = 10;
        this.max = 16;
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }

    run() {
        return new Promise((resolve) => {
            const race = setInterval(() => {
                this.distance += this.speed;
                this.speed = this.setSpeed();
            }, 1000);
            const timerRun = setInterval(() => {
                console.log(`name: ${this.name} breed: ${this.breed} distance: ${this.distance} `);
            }, 2000);
            setTimeout(() => {
                clearInterval(timerRun);
                clearInterval(race);
                resolve();
            }, 10000);
        });
    }
}

const horses = [
    {
        name: 'name1',
        breed: 'breed1',
    },
    {
        name: 'name2',
        breed: 'breed2',
    },
    {
        name: 'name3',
        breed: 'breed3',
    },
    {
        name: 'name4',
        breed: 'breed4',
    },
    {
        name: 'name5',
        breed: 'breed5',
    },
    {
        name: 'name6',
        breed: 'breed6',
    },
    {
        name: 'name7',
        breed: 'breed7',
    },
    {
        name: 'name8',
        breed: 'breed8',
    },
    {
        name: 'name9',
        breed: 'breed9',
    },
    {
        name: 'name10',
        breed: 'breed10',
    },
];

class Race {
    constructor(horsesNames) {
        this.horses = this.createRace(horsesNames);
    }

    createRace(horsesArr) {
        this.racerArr = [];
        horsesArr.forEach((horse) => {
            const racer = new Racer(horse.name, horse.breed);
            this.racerArr.push(racer);
        });
        return this.racerArr;
    }

    startRace() {
        const timeRun = 10;
        this.horses.forEach((horse, i) => {
            const result = horse.run(timeRun);
            result.then(() => {
                if (i === this.horses.length - 1) {
                    const winner = this.horses.reduce((acc, current) => {
                        const winnerHorse = acc.distance > current.distance ? acc : current;
                        return winnerHorse;
                    });
                    console.log('winner', winner.name);
                }
            });
        });
    }
}

const race = new Race(horses);
race.startRace();
