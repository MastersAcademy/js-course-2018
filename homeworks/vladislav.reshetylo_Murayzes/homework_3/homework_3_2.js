function recursion(number) {
    if (number === 2) {
        return true;
    }
    if (number > 2) {
        return recursion(number / 2);
    }
    return false;
}
const minValue = 10;
const maxValue = 600;
for (let i = minValue; i <= maxValue; i++) {
    if (recursion(i) === true) {
        console.log(i);
    }
}
