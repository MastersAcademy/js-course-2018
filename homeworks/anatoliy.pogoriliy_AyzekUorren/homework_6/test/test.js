const assert = require('assert');

const {
    User, Horse, Racer, randomHorseCredentials, Race,
} = require('../task');

describe('DefineProperty', () => {
    const user = new User();
    it('should set String and get capitalized', () => {
        user.fullName = 'aNna-mAria joHNs';
        assert.deepStrictEqual(user.fullName, 'Anna-Maria Johns');
    });
    it('should set String and get only Numbers', () => {
        user.phone = '+38(096)-111-22-33';
        assert.deepStrictEqual(user.phone, '380961112233');
    });
    it('should set String and get only Numbers', () => {
        user.phone = '38(096)+111b22+33';
        assert.deepStrictEqual(user.phone, '380961112233');
    });
});
describe('Classes', () => {
    describe('Horse', () => {
        const horseCredentials = randomHorseCredentials();
        const horse = new Horse(horseCredentials.name, horseCredentials.breed);
        it('should get name', () => {
            assert.deepStrictEqual(horse.name, horseCredentials.name);
        });
        it('should get breed', () => {
            assert.deepStrictEqual(horse.breed, horseCredentials.breed);
        });
    });
    describe('Racer', () => {
        const horseCredentials = randomHorseCredentials();
        const racer = new Racer(horseCredentials.name, horseCredentials.breed);
        it('should get name', () => {
            assert.deepStrictEqual(racer.name, horseCredentials.name);
        });
        it('should get breed', () => {
            assert.deepStrictEqual(racer.breed, horseCredentials.breed);
        });
        it('should get distance equal 0', () => {
            assert.deepStrictEqual(racer.distance, 0);
        });
        it('should get speed', () => {
            assert.notDeepStrictEqual(racer.speed, undefined);
        });
        it('should get new speed (can fail if equal speed two times set)', () => {
            const racerSpeedy = new Racer();
            const lastSpeed = racerSpeedy.speed;
            racerSpeedy.setSpeed();
            assert.notDeepStrictEqual(racerSpeedy.speed, lastSpeed);
        });
        it('should start run and get new distance two times', (done) => {
            let distance = 0;
            racer.run();
            setTimeout(() => {
                distance += racer.speed;
                assert.deepStrictEqual(racer.distance, distance);
                done();
            }, 1000);
        });
    });
    describe('Race', () => {
        it('createRace', () => {
            const testRace1 = new Race();
            testRace1.createRace();
            assert.deepStrictEqual(testRace1.horses.length, 10);
        });
        it('startRace', (done) => {
            const testRace2 = new Race();
            testRace2.createRace();
            testRace2.startRace().then((winners) => {
                console.log('First Three Winners:');
                winners.forEach(horse => console.log(`      Horse:${horse.name} Breed:${horse.breed} Distance:${horse.distance}`));
                assert.deepStrictEqual(winners.length, 3);
                done();
            });
        });
    });
});
