function getRandomNumber() {
    const randomNumber = (Math.random() * 10) + 5;
    return Math.floor(randomNumber);
}

module.exports = { getRandomNumber };
