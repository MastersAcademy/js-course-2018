const horsesList = [['Big Racket', 'Thoroughbred'], ['Shareef Dancer', 'Thoroughbred'],
    ['Green Monkey', 'Thoroughbred'], ['Annihilator', 'Thoroughbred'],
    ['Seattle Dancer', 'Thoroughbred'], ['Mystic Park', 'Standardbred'],
    ['Pine Chip', 'Standardbred'], ['Sardar\t', 'Thoroughbred'],
    ['Poetin\t', 'Brandenburger'], ['Lord Sinclair', 'Bavarian Warmblood']];

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
        this.time = 0;
    }

    setSpeed() { this.speed = 10 + 5 * Math.random(); }

    run(timeout) {
        const that = this;

        let intervalID;

        function racing() {
            that.distance += that.speed;
            that.time++;
            that.setSpeed();
            if (that.time >= timeout) clearInterval(intervalID);
        }

        intervalID = setInterval(racing, 1000);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        this.horses = horsesList.map(arr => new Racer(arr[0], arr[1]));
    }

    startRece(timeout) {
        this.horses.forEach(obj => obj.run(timeout));

        const that = this;

        function racing(time) {
            function createLogRacing(str, obj) {
                return `${str}${obj.name}\t(${obj.breed})\t\trun\t${obj.distance} m\n`;
            }

            function logRacing() {
                console.log(that.horses.reduce(createLogRacing, `Time = ${time} c:\n`));
                if (time < timeout) racing(time + 2);
                else {
                    that.horses.sort((a, b) => b.distance - a.distance);
                    console.log(`Winner: ${that.horses[0].name}   congratulate the champion!`);
                }
            }

            function synchronization() {
                if (that.horses.some(obj => obj.time < time)) setTimeout(synchronization, 16);
                else logRacing();
            }

            setTimeout(synchronization, 2000);
        }

        racing(2);
    }
}

const race1 = new Race();

race1.createRace();
race1.startRece(10);
