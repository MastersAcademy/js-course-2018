const firstStartingPoint = 0;
const firstEndingPoint = 50;
const firstStep = 5;

const secondStartingPoint = 0;
const secondEndingPoint = 32;
const secondStep = 4;

function createArray(start, finish, step) {
    const results = [];
    for (let i = start; i <= finish; i += step) {
        results.push(i);
    }
    return results;
}

console.log(createArray(firstStartingPoint, firstEndingPoint, firstStep));
console.log(createArray(secondStartingPoint, secondEndingPoint, secondStep));
