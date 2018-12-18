const UPPER = 50;
const LOWER = 100;

function getRandomNumber() {
    return Math.random() * (UPPER - LOWER) + LOWER;
}

module.exports = { getRandomNumber };
