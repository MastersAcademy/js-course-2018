
function User() {
    let localFullName = null;
    let localPhone = null;

    Object.defineProperty(this, 'fullName', {
        get() {
            return localFullName
                .replace(/\w*/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        },
        set(value) {
            localFullName = value;
        },
    });

    Object.defineProperty(this, 'phone', {
        get() {
            return localPhone.replace(/\D/g, '');
        },
        set(value) {
            localPhone = value;
        },
    });
}

function randomHorseCredentials() {
    const arrayHorseBreeds = [
        'Arabian', 'Quarter Horse', 'Thoroughbred',
        'Tennessee Walker', 'Morgan', 'Paint',
        'Appaloosa', 'Miniature Horse', 'Warmblood',
        'Andalusian',
    ];
    const arrayHorseNames = [
        'Velvet', 'Kingston', 'Sniper',
        'Sugar Stallion', 'Barq', 'Joker', 'Preacher',
        'Flash Sparkle', 'Quinn', 'Jill',
        'Flash Sparks', 'Justice', 'Bruno',
        'Rogue', 'Talzanna', 'Leonardo',
        'Orion', 'Narnia', 'Sweet Sparks', 'Kalli',
    ];
    const breed = arrayHorseBreeds[Math.floor(Math.random() * (arrayHorseBreeds.length))];
    const name = arrayHorseNames[Math.floor(Math.random() * (arrayHorseBreeds.length))];
    return { name, breed };
}

class Horse {
    constructor(name, breed) {
        this.localName = name;
        this.localBreed = breed;
    }

    get name() {
        return this.localName;
    }

    get breed() {
        return this.localBreed;
    }
}

class Racer extends Horse {
    constructor(...args) {
        super(...args);
        this.setSpeed();
        this.localDsitance = 0;
    }

    get speed() {
        return this.localSpeed;
    }

    get distance() {
        return this.localDsitance;
    }

    setSpeed() {
        this.localSpeed = Math.floor(Math.random() * (15 - 10 + 1) + 10);
    }

    run() {
        this.runTimer = setInterval(() => {
            this.setSpeed();
            this.localDsitance += this.speed;
        }, 1000);
    }

    stop() {
        clearInterval(this.runTimer);
    }
}

function horseSort(first, second) {
    if (first.distance > second.distance) {
        return -1;
    }
    if (first.distance < second.distance) {
        return 1;
    }
    return 0;
}

class Race {
    constructor() {
        this.localHorses = [];
    }

    createRace() {
        for (let i = 0; i < 10; i++) {
            const horseCredentials = randomHorseCredentials();
            this.localHorses.push(new Racer(horseCredentials.name, horseCredentials.breed));
        }
    }

    get horses() {
        return this.localHorses;
    }

    startRace() {
        this.localHorses.forEach(horse => horse.run());
        this.consoleTimer = setInterval(() => {
            console.log('   [2 second]');
            this.localHorses.forEach((horse) => {
                console.log(`       Horse: ${horse.name} Breed: ${horse.breed} speed:${horse.speed} distance:${horse.distance}`);
            });
        }, 2000);
        return new Promise((resolve) => {
            setTimeout(() => {
                this.localHorses.forEach(horse => horse.stop());
                this.localHorses.sort(horseSort);
                clearInterval(this.consoleTimer);
                console.log(`\n\n#1 Winner: Name:${this.localHorses[0].name} Breed:${this.localHorses[0].breed} Distance:${this.localHorses[0].distance}\n\n`);
                const winners = [];
                for (let i = 0; i < 3; i++) {
                    winners.push(this.localHorses[i]);
                }
                resolve(winners);
            }, 10000);
        });
    }
}

module.exports = {
    User, Horse, Racer, randomHorseCredentials, Race,
};
