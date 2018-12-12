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
        this.timer = 0;
    }

    setSpeed() {
        this.speed = Math.random(10, 15) * 5 + 10;
    }

    run() {
        this.timer = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    finish() {
        clearInterval(this.timer);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const runners = [
            { name: 'Ibtenauer', breed: 'Arabian' },
            { name: 'Honnor', breed: 'Quarter Horse' },
            { name: 'Omine', breed: 'Thoroughbred' },
            { name: 'Panne', breed: 'Tennessee Walker' },
            { name: 'Ewerton', breed: 'Paint' },
            { name: 'Idoll', breed: 'Morgan' },
            { name: 'Troboz', breed: 'Appaloosa' },
            { name: 'Morgan', breed: 'Andalusian' },
            { name: 'Angel', breed: 'Miniature Horse' },
            { name: 'X', breed: 'Warmblood' },
        ];

        runners.forEach((element) => {
            this.horses.push(new Racer(element.name, element.breed));
        });
    }

    startRace() {
        console.log('------------   START   -----------');

        const timerID = setInterval(() => {
            // start
            this.horses.forEach(horse => console.log(`Name: ${horse.name}      Breed: ${horse.breed}     Distance: ${horse.distance}`));
        }, 2000);

        setTimeout(() => {
            // stop
            clearInterval(timerID);
            console.log('finish');
            let winner = this.horses[0];
            this.horses.forEach((horse) => {
                horse.finish();
                if (horse.distance > winner.distance) {
                    winner = horse;
                }
            });
            console.log(`Winner :   ${winner.name}     ${winner.breed}     ${winner.distance}`);
        }, 10000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
