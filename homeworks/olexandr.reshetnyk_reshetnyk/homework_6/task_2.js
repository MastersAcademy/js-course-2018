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
        this.runTimer = setInterval(() => {
            this.distance += this.speed;
            this.setSpeed();
        }, 1000);
    }

    finish() {
        clearInterval(this.runTimer);
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * (15.99 - 10) + 10);
    }
}
class Race {
    createRace() {
        // creating array of horse names
        const horseNames = [];
        for (let i = 0; i < 10; i++) {
            horseNames[i] = `horse${i}`;
        }
        // creating Racer instances
        this.horses = [];
        horseNames.forEach((name) => {
            this.horses.push(new Racer(name, 'simple_breed'));
        });
    }

    startRace() {
        this.raceTime = 0;
        console.log('The race is starting!');
        // srart horses's running
        this.horses.forEach((horse) => {
            horse.run();
        });

        // every 2 seconds log and check time
        this.raceTimer = setInterval(() => {
            this.raceTime += 2;
            console.log(`It's been ${this.raceTime} seconds.`);
            // log horses state
            this.horses.forEach((horse) => {
                console.log(`${horse.name} ${horse.breed} ${horse.distance}`);
            });
            // if 10 sec then finish the race
            if (this.raceTime >= 10) {
                this.horses.forEach((horse) => {
                    horse.finish();
                });
                clearInterval(this.raceTimer);

                // sorting horses by DESC their distances
                this.horses.sort((h1, h2) => h2.distance - h1.distance);
                // print winners
                console.log('Congratulation our horses-winners!');
                for (let i = 0; i < this.horses.length; i++) {
                    if (this.horses[i].distance === this.horses[0].distance) {
                        console.log(`Winner: ${this.horses[i].name}  ${this.horses[i].distance}`);
                    }
                }
                console.log('They won a lot of nothing!');
            }
        }, 2010);
    }
}

const race = new Race();
race.createRace();
race.startRace();
