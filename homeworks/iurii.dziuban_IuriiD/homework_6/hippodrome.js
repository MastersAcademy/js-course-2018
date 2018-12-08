/**
 * https://github.com/MastersAcademy/js-course-2018/issues/764
 * Используя классы написать имитацию ипподрома
 * Необходимый минимум для реализации:
 * классы:
 * Horse - базовый класс для лошади, должен содержать два поля: name и breed,
 * Racer - дочерний класс для лошади, должен содержать методы run и setSpeed,
 * поля distance и speed. Конструктор класса должен принимать имя и породу лошади,
 * определить рандомную скорость для лошади в диапазоне 10..15 с помощью метода setSpeed
 * run запускает забег для лошади и каждую секунду добавляет текущее значение скорости
 * к пройденной дистанции, плюс случайным образом заново определяет скорость лошадив
 * диапазоне 10..15.
 * setSpeed - устанавливает рандомную скорость для лошади в диапазоне 10..15
 * Race - должен содержить как минимум два метода: createRace и startRace, поле horses(массив).
 * createRace создает 10 лошадей с именами из заранее созданного массива. Инстансы
 * созданных лошадей ложатся в свойство класса horses(?or Race?) (массив).
 * startRace запускает в цикле забег у каждой лошади. После этого каждые две секунды
 * необходимо выводить в консоль имя каждой лошади, ее породу и пройденную дистанцию.
 * Весь забег должен длиться 10 секунд и по завершению необходимо вывести победителя по
 * максимальной пройденной дистанции, не забыв при этом остановить внутренние интервалы лошадей.
 */

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

    setSpeed() {
        this.speed = Math.floor(Math.random() * 6) + 10;
    }

    run() {
        this.handle = setInterval(() => {
            this.setSpeed();
            this.distance += this.speed;
        }, 1000);
    }

    stop() {
        clearInterval(this.handle);
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const horseNames = [
            'President',
            'Sheriff',
            'Deputy',
            'Lucky',
            'Pecos',
            'Colt',
            'Horseshoe',
            'Barley',
            'Bronco',
            'Franklin',
        ];

        const horseBreeds = ['Arabian', 'Quarter Horse', 'Thoroughbred'];

        horseNames.forEach((horse) => {
            this.horses.push(new Racer(horse, horseBreeds[Math.floor(Math.random() * 3)]));
        });
    }

    sortAndDisplayResults() {
        this.horses.sort((a, b) => {
            if (a.distance < b.distance) return 1;
            if (b.distance < a.distance) return -1;
            return 0;
        });
        this.horses.forEach((horse) => {
            console.log(
                `${horse.name} (${horse.breed}) -- passed: ${horse.distance} m`,
            );
        });
    }

    startRace() {
        console.log('\n🐴 OUR PARTICIPANTS 🐴\n');
        this.horses.forEach((horse) => {
            console.log(`${horse.name} -- ${horse.breed}`);
        });

        console.log('\n\n🏁 AND OUR RACE BEGINS! 🏁');
        this.horses.map(horse => horse.run());

        this.timePassed = 0;
        const handle = setInterval(() => {
            this.timePassed += 2;
            if (this.timePassed >= 10) {
                console.log('\n\n🏁 RACE FINISHED! 🏁');
                console.log('\n🏆 OUR FINAL LEADERBOARD 🏆\n');
                this.horses.forEach(horse => horse.stop());
                clearInterval(handle);
            }
            if (this.timePassed < 10) console.log(`\nLeaderboard after ${this.timePassed} seconds:`);
            this.sortAndDisplayResults();
        }, 2 * 1000);
    }
}

const myRace = new Race();
myRace.createRace();
myRace.startRace();
