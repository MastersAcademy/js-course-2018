const randomIntInRange = (min, max) => (Math.floor(Math.random() * (max + 1 - min) + min));
const strPad = (string, number, side = 'l', symbol = ' ') => {
    const s = `${string}`;
    if (s.length >= number) {
        return s;
    }
    const symbolNumber = number - s.length;
    return side === 'l' ? s + symbol.repeat(symbolNumber) : symbol.repeat(symbolNumber) + s;
};

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
        this.timer = undefined;
        this.setSpeed();
    }

    setSpeed() {
        this.speed = randomIntInRange(10, 15);
    }

    run() {
        this.timer = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        if (this.timer !== undefined) {
            clearInterval(this.timer);
        }
    }
}

const createRacer = (i) => {
    const cyclicValueFromArray = (n, array) => (
        n < array.length ? array[n] : cyclicValueFromArray(n - array.length, array)
    );
    const randomValueFromArray = array => (array[Math.floor(Math.random() * array.length)]);
    const hBreed = ['Arabian', 'Appalooso', 'Pinto', 'Quarter'];
    const horsesNames = ['Colt', 'Diesel', 'Buckeye', 'Magnolia', 'Willow', 'Ironclad', 'Ladybird', 'Tank', 'Skydancer', 'Bronco'];
    return new Racer(cyclicValueFromArray(i, horsesNames), randomValueFromArray(hBreed));
};

class Race {
    constructor() {
        this.horses = [];
        this.timer = undefined;
        this.step = 0;
    }

    creatRace() {
        for (let el = 0; el < 12; el++) {
            this.horses.push(createRacer(el));
        }
    }

    startRace() {
        this.horses.forEach(horse => (horse.run()));
        this.timer = setInterval(() => {
            this.step++;
            console.log(`\nStep ${this.step}`);
            for (let i = 0; i < this.horses.length; i++) {
                const breed = `(${this.horses[i].breed})`;
                console.log(`${strPad(this.horses[i].name, 12)} ${strPad(breed, 11)}: ${strPad(this.horses[i].distance, 3, 'r')}`);
            }
            if (this.step >= 10) {
                clearInterval(this.timer);
                this.horses.forEach(horse => (horse.stop()));
                this.findWinner();
            }
        }, 2000);
    }

    findWinner() {
        let winner = this.horses[0];
        for (let i = 1; i < this.horses.length; i++) {
            if (winner.distance < this.horses[i].distance) {
                winner = this.horses[i];
            }
        }
        console.log(`\nWinner: ${winner.name} (${winner.breed})`);
    }
}

const race = new Race();

// Output
race.creatRace();
race.startRace();
