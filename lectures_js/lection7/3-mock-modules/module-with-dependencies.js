const { getRandomNumber } = require('./some-dependency');

function veryDifficultFunction() {
    return getRandomNumber() > 12;
}

module.exports = { veryDifficultFunction };
