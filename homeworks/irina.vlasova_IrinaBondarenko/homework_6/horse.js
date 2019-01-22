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
        this.speed = Math.floor(Math.random() * 5 + 10);
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
        const a = [
            { name: '', breed: '' },
            { name: 'Star', breed: 'Arabian' },
            { name: 'Dakota', breed: 'Quarter Horse' },
            { name: 'Misty', breed: 'Thoroughbred' },
            { name: 'Duke', breed: 'Tennessee Walker' },
            { name: 'Honey', breed: 'Morgan' },
            { name: 'Toby', breed: 'Paint' },
            { name: 'Rain', breed: 'Appaloosa' },
            { name: 'Luna', breed: 'Miniature Horse' },
            { name: 'Chief', breed: 'Warmblood' },
            { name: 'Blaze', breed: 'Andalusian' },
        ];
        a.forEach((b) => {
            this.horses.push(new Racer(b.name, b.breed));
        });
    }

    startRace() {
        this.horses.forEach(a => a.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach((a) => {
                    console.log(a);
                });
            }, 2000 * i);
        }
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`win horse: ${this.horses[0].name} , breed: ${this.horses[0].breed}`);
        }, 10000);
    }
}
const racecourse = new Race();
racecourse.createRace();
racecourse.startRace();
