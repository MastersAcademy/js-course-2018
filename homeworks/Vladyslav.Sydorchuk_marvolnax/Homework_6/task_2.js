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
        this.speed = Math.floor(Math.random() * (15 - 10 + 1) + 10);
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
        const party = [
            { name: 'Agate', breed: 'Arabian thoroughbred' },
            { name: 'Absinthe', breed: 'Thoroughbred riding' },
            { name: 'Altair', breed: 'Friesian' },
            { name: 'Avalon', breed: 'Percheron' },
            { name: 'Iceberg', breed: 'Akhal-Teke' },
            { name: 'Amulet', breed: 'Arabian thoroughbred' },
            { name: 'Aztec', breed: 'Friesian' },
            { name: 'Atlant', breed: 'Percheron' },
            { name: 'Velvet', breed: 'Arabian thoroughbred' },
            { name: 'Benefit', breed: 'Akhal-Teke' },
        ];
        party.forEach((racer) => {
            this.horses.push(new Racer(racer.name, racer.breed));
        });
    }
     startRace() {
        console.log('Start!!!');
        this.horses.forEach(racer => racer.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(racer => console.log(`Name: ${racer.name} Breed: ${racer.breed} Distance: ${racer.distance}`));
            }, 2000 * i);
        }
        setTimeout(() => {
            console.log('Finish!!!');
            this.horses.sort((a, b) => b.distance - a.distance);
            console.log(`And Winner...
            Name: ${this.horses[0].name}
            Breed: ${this.horses[0].breed}
            Distance : ${this.horses[0].distance}`);
        }, 11000);
    }
}
 const race = new Race();
race.createRace();
race.startRace();
