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

    run(runTime) {
        let time = 1000;
        for (let i = 0; i <= runTime; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, time);
            time += 1000;
        }
    }

    setSpeed() {
        const min = 10;
        const max = 15;
        this.speed = Math.floor(Math.random() * (max - min)) + min;
    }
}

class Race {
    constructor() {
        this.horses = [];
        this.runningTime = 10;
    }

    createRace() {
        const horses = [
            ['Franklin', 'American Albino'],
            ['Sheriff', 'Arabian'],
            ['King', 'Quarter Horse'],
            ['River', 'Thoroughbred'],
            ['Willow', 'Tennessee Walker'],
            ['Big Mama', 'Morgan'],
            ['Cherish', 'Paint'],
            ['Rosette', 'Appaloosa'],
            ['Strawberry', 'Miniature Horse'],
            ['Blacksmith', 'Warmblood'],
        ];
        horses.forEach((element) => {
            this.horses.push(new Racer(element[0], element[1]));
        });
    }

    startRace() {
        this.horses.forEach(element => element.run(this.runningTime));
        this.showLog();
    }

    showLog() {
        let time = 2000;
        for (let i = 1; i <= this.runningTime / 2; i++) {
            setTimeout(() => {
                console.log(`\n------- ${i} round -------`);
                this.horses.forEach((element) => {
                    console.log(`Horse name: ${element.name} \tHorse breed: ${element.breed} \tDistance: ${element.distance}`);
                });
            }, time);
            time += 2000;
        }
        const times = (this.runningTime + 1) * 1000;
        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);
            if (this.horses[0].distance !== this.horses[1].distance) {
                console.log('\n------- WINNER -------');
                console.log(`Winner name: ${this.horses[0].name}`);
                console.log(`Breed: ${this.horses[0].breed}`);
                console.log(`Distance: ${this.horses[0].distance}`);
            } else {
                console.log('Photo finish');
            }
        }, times);
    }
}
const race = new Race();
race.createRace();
race.startRace();
