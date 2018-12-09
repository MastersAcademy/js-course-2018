/**
 * Используя классы написать имитацию ипподрома
 * Необходимый минимум для реализации:
 * классы Horse - базовый класс для лошади, должен содержать два поля: name и breed,
 * Racer - дочерний класс для лошади, должен содержать методы run и setSpeed, поля
 * distance и speed. Конструктор класса должен принимать имя и породу лошади, определить
 * рандомную скорость для лошади в диапазоне 10..15 с помощью метода setSpeed
 * run запускает забег для лошади и каждую секунду добавляет текущее значение скорости
 * к пройденной дистанции, плюс случайным образом заново определяет скорость
 * лошади в диапазоне 10..15.
 * setSpeed - устанавливает рандомную скорость для лошади в диапазоне 10..15
 * Race - должен содержить как минимум два метода: createRace и startRace, поле horses(массив).
 * createRace создает 10 лошадей с именами из заранее созданного массива. Инстансы созданных
 * лошадей ложатся в свойство класса horses (массив).
 * startRace запускает в цикле забег у каждой лошади.
 * После этого каждые две секунды необходимо выводить в консоль имя каждой лошади,
 * ее породу и пройденную дистанцию. Весь забег должен длиться 10 секунд и по завершению
 * необходимо вывести победителя по максимальной пройденной дистанции, не забыв при этом
 * остановить внутренние интервалы лошадей.
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
    run() {
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, 1000 * i);
        }
    }
    setSpeed() {
        this.speed = Math.floor(Math.random() * 16);
    }
}
class Race {
    constructor() {
        this.horses = [];
    }
    createRace() {
        const horsesList = [
            { name: 'Abaccus', breed: 'American Paint Horse' },
            { name: 'Acapella', breed: 'American Quarter Horse' },
            { name: 'Admiral', breed: 'American Saddlebred Horse' },
            { name: 'Allegria', breed: 'American Standardbred Horse' },
            { name: 'Alomar', breed: 'Appaloosa Horse' },
            { name: 'Ambara', breed: 'Arabian Horse' },
            { name: 'Amulet', breed: 'Clydesdale Horses' },
            { name: 'Anakin', breed: 'Hanoverian Horse' },
            { name: 'Arabella', breed: 'Morgan Horse' },
            { name: 'Ashanti', breed: 'Mustang Horses' },
        ];
        horsesList.forEach((horse) => {
            this.horses.push(new Racer(horse.name, horse.breed));
        });
    }
    startRace() {
        this.horses.forEach(result => result.run());
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                this.horses.forEach(result => console.log(`name: ${result.name}, breed: ${result.breed}, distance: ${result.distance}`));
            }, 2000 * i);
        }
    }
    finishRace() {
        setTimeout(() => {
            this.horses.sort((o1, o2) => o2.distance - o1.distance);
            console.log();
            console.log(`WINNER: 
        Name: ${this.horses[0].name}
        Breed: ${this.horses[0].breed}
        Distance: ${this.horses[0].distance}`);
        }, 11000);
    }
}

const race = new Race();
race.createRace();
race.startRace();
race.finishRace();
