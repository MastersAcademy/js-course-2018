const horsesList = [
    { name: '1', breed: 'Abtenauer' },
    { name: '2', breed: 'Danish Warmblood' },
    { name: '3', breed: 'Losino' },
    { name: '4', breed: 'Morab' },
    { name: '5', breed: 'Senner' },
    { name: '6', breed: 'Pottok' },
    { name: '7', breed: 'Paso Fino' },
    { name: '8', breed: 'Iomud' },
    { name: '9', breed: 'Cuban Criollo' },
    { name: '10', breed: 'Brumbyr' },
];

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
        this.timerId = '';
        this.setSpeed();
    }

    run() {
        this.timerId = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        clearInterval(this.timerId);
    }

    status() {
        console.log(`${this.name} ${this.breed} ${this.distance}`);
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * (6) + 10);
    }
}

class Race {
    constructor(participants) {
        this.horses = [];
        this.participants = participants;
    }

    createRace() {
        this.horses = this.participants.map(el => new Racer(el.name, el.breed));
    }

    startRace() {
        this.horses.forEach((el) => {
            el.run();
        });

        const timerId = setInterval(
            () => {
                this.horses.forEach((el) => {
                    el.status();
                });
            },
            2000,
        );

        setTimeout(() => {
            clearInterval(timerId);
            this.horses.forEach((el) => {
                el.status();
                el.stop();
            });

            this.horses.sort((a, b) => b.distance - a.distance);

            console.log(`\nWinner: ${this.horses[0].name}`);
            console.log(`Breed: ${this.horses[0].breed}`);
            console.log(`Distance: ${this.horses[0].distance}`);
        }, 10000);
    }
}

const test = new Race(horsesList);
test.createRace();
test.startRace();
