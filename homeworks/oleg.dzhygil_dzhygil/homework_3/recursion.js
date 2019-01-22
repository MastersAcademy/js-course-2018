function doDegree(number) {
    if (number === 2) {
        return true;
    }
    if (number > 2) {
        return doDegree(number / 2);
    }
    return false;
}
let minNumber = 10;
const maxNumber = 600;
for (minNumber; minNumber <= maxNumber; minNumber++) {
    if (doDegree(minNumber) === true) {
        console.log(minNumber);
    }
}
