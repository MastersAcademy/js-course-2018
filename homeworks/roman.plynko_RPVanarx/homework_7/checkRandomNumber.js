const { getRandomNumber } = require('./getRandomNumber');

function isLess100() {
    return getRandomNumber() <= 100;
}

function isBigger50() {
    return getRandomNumber() >= 50;
}

module.exports = { isLess100, isBigger50 };
