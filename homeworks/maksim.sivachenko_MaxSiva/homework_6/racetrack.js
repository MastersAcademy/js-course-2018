const breeds = ['Pony', 'Akhal-Teke horse', 'Akhalteke', 'Frieze', 'Shire'];

class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.speed = 0;
        this.distance = 0;
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * (15 - 10)) + 10;
    }

    run() {
        const timeout = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
        setTimeout(() => {
            clearInterval(timeout);
        }, 10000);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        for (let i = 1; i < 11; i++) {
            const breed = breeds[Math.floor(Math.random() * breeds.length)];
            const horse = new Horse(`Horse ${i}`, breed);
            this.horses.push(new Racer(horse.name, horse.breed));
        }
    }

    startRace() {
        this.horses.forEach(participant => participant.run());
        const win = {};
        win.name = '';
        win.breed = '';
        win.distance = 0;
        const timeout = setInterval(() => {
            this.horses.forEach((participant) => {
                if (win.distance <= participant.distance) {
                    win.name = participant.name;
                    win.breed = participant.breed;
                    win.distance = participant.distance;
                }

                console.log(`${participant.name}, ${participant.breed}, ${participant.distance}`);
            });
        }, 2000);

        setTimeout(() => {
            clearInterval(timeout);
            console.log(`${win.name}, ${win.breed}, ${win.distance}`);
        }, 10000);
    }
}


const race = new Race();
race.createRace();
race.startRace();
