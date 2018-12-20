function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function fiboNumb(maxNumber) {
    const array = [0, 1];
    console.log(maxNumber);
    for (let i = 1; i < maxNumber; i = array[array.length - 1] + array[array.length - 2]) {
        array.push(i);
    }
    return array;
}

console.log(fiboNumb(randNumb(50, 100)));
module.exports = { fiboNumb };
