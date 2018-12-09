class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

// eslint-disable-next-line no-unused-vars
class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);
        this.distance = 0;
        this.speed = 0;
        this.setSpeed();
    }

    setSpeed() {
        this.speed = Math.floor(Math.random() * 15) + 10;
    }

    run() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distance += this.setSpeed();
            }, 1000 * i);
        }
    }
}

class Race {
    // createRace() {
    //     const horses = [{
    //         name: 'Злобный_бульбулятор',
    //         breed: 'DoNaT1k',
    //     },
    //     {
    //         name: 'ОпАSнЫй ВоЗрАSт',
    //         breed: 'Vitaminka',
    //     },
    //     {
    //         name: 'MamBa',
    //         breed: 'Bambi',
    //     },
    //     {
    //         name: 'KyKyPy3a',
    //         breed: 'MiNi_ZLoB',
    //     },
    //     {
    //         name: 'D_O_M_I_N_A_T_O_R',
    //         breed: 'MANDARIN',
    //     },
    //     {
    //         name: 'Fantasy',
    //         breed: 'НУБОкиллер',
    //     },
    //     {
    //         name: 'Чучундра',
    //         breed: 'Bella',
    //     },
    //     {
    //         name: 'Foxhaven',
    //         breed: 'Fazer',
    //     },
    //     {
    //         name: 'ISTRIBITEL',
    //         breed: 'Лапочка',
    //     },
    //     {
    //         name: 'DIKTATOR',
    //         breed: 'babnik',
    //     }
    //   ];
    //   const arr_horses = [];
    //     Race.horses.forEach( (horse) => {
    //       horse = new Horse(horses[name], horses[breed]);
    //       arr_horses.push(horse);
    //     });
    // }

    // startRace() {
    //     console.log('start race');
    // }

    // finish() {
    //     console.log('finish');
    // }
}


const race = new Race();
race.createRace();
race.startRace();
race.finish();
