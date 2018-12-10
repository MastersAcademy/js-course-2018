function recursion(number) {
    if (number > 1) {
        return recursion(number / 2);
    }
    return number === 1;
}
const minValue = 10;
const maxValue = 600;
for (let i = minValue; i <= maxValue; i++) {
    if (recursion(i) === true) {
        console.log(i);
    }
}
