const horsesList = [{ name: 'Star', breed: 'arabian' },
    { name: 'Black Morgan', breed: 'paint' },
    { name: 'Valkyrie', breed: 'morgan' },
    { name: 'Phoenix', breed: 'appaloosa' },
    { name: 'Golden Star', breed: 'warmblood' },
    { name: 'Strong Wind', breed: 'morgan' },
    { name: 'Caesar', breed: 'morgan' },
    { name: 'Rocinante', breed: 'paint' },
    { name: 'Bourgeois', breed: 'arabian' },
    { name: 'Spring Song', breed: 'warmblood' }];

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
        this.interval = setInterval(() => {
            this.setSpeed();
            this.distance += this.speed;
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    setSpeed() {
        const max = 15;
        const min = 10;
        this.speed = Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        for (let i = 0; i < horsesList.length; i++) {
            const racer = new Racer(horsesList[i].name, horsesList[i].breed);
            this.horses.push(racer);
        }
    }

    displayInfo() {
        const timerId = setInterval(() => {
            console.table(this.horses.map(horses => ({
                name: horses.name,
                breed: horses.breed,
                distance: horses.distance,
            })));
        }, 2000);

        setTimeout(() => {
            clearInterval(timerId);
            this.endRace();
            function compare(a, b) {
                if (a.distance > b.distance) {
                    return -1;
                }
                if (a.distance < b.distance) {
                    return 1;
                }
                return 0;
            }

            console.log('##### WINNER ####');
            const winner = this.horses.sort(compare)[0];
            console.table({
                name: winner.name,
                breed: winner.breed,
                distance: winner.distance,
            });
        }, 10000);
    }

    startRace() {
        this.horses.forEach((racer) => {
            racer.run();
        });

        this.displayInfo();
    }

    endRace() {
        this.horses.forEach((racer) => {
            racer.stop();
        });
    }
}

const race = new Race();
race.createRace();
race.startRace();
