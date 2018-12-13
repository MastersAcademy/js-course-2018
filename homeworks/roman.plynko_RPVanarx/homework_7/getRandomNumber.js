function getRandomNumber() {
    const randomNumber = (Math.random() * 51) + 50;
    return Math.floor(randomNumber);
}

module.exports = { getRandomNumber };
