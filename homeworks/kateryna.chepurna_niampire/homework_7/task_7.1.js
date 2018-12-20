function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function fiboNum(maxNumber) {
    const arrNums = [0];
    let num = 1;
    while (num <= maxNumber) {
        arrNums.push(num);
        num = arrNums[arrNums.length - 1] + arrNums[arrNums.length - 2];
    }
    console.log(maxNumber);
    return arrNums;
}
console.log(fiboNum(randomNumber(50, 100)));
module.exports = fiboNum;
