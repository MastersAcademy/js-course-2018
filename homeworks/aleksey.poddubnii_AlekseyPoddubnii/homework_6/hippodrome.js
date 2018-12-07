function getRandomInt(min, max) {
    Math.ceil(min);
    Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(10, 16));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(10, 15));
