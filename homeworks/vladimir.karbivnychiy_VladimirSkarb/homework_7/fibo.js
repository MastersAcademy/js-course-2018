function randNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function fiboNumb(maxNumber) {
    const fiboArray = [0];
    let firstNumber = 0;
    let nextNumber = 1;
    while (nextNumber <= maxNumber) {
        fiboArray.push(nextNumber);
        nextNumber += fiboArray[firstNumber];
        firstNumber++;
    }
    return fiboArray;
}
console.log(fiboNumb(randNumb(50, 100)));

module.exports = { fiboNumb };
