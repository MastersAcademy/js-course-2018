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
        this.setSpeed();
    }

    run() {
        this.id = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    stop() {
        clearInterval(this.id);
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 6) + 10;
    }
}

class Race {
    constructor() {
        this.horseBreed = 'Akhal-Teke';
        this.horseName = ['horse_1', 'horse_2', 'horse_3', 'horse_4', 'horse_5', 'horse_6', 'horse_7', 'horse_8', 'horse_9', 'horse_10'];
        this.horses = [];
    }


    createRace() {
        this.horseName.forEach((name) => {
            this.horses.push(new Racer(name, this.horseBreed));
        });
    }

    startRace() {
        this.horses.forEach((horse) => {
            horse.run();
        });

        this.logInterval = setInterval(() => {
            this.horses.forEach((horse) => {
                console.log(`${horse.name} ${horse.breed} ${horse.distance}`);
            });
        }, 2000);
    }

    stopRace() {
        clearInterval(this.logInterval);
        this.horses.forEach((horse) => {
            horse.stop();
        });
    }

    getWiner() {
        let max = 0;

        for (let i = 0; i < this.horses.length; i++) {
            if (this.horses[max].distance < this.horses[i].distance) max = i;
        }
        console.log(`Winer is: ${this.horses[max].name} : ${this.horses[max].breed} : ${this.horses[max].distance}`);
    }
}

const raceTrack = new Race();
raceTrack.createRace();
raceTrack.startRace();

setTimeout(() => {
    raceTrack.stopRace();
    raceTrack.getWiner();
}, 10000);
