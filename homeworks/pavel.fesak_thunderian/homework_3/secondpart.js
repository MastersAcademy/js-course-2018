function reccursion(number) {
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return reccursion(number / 2);
    }
    return false;
}
const minNumber = 10;
const maxNumber = 600;
for (let i = minNumber; i <= maxNumber; i++) {
    if (reccursion(i)) {
        console.log(i);
    }
}
