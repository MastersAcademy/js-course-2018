
function recursion(x) {
    return ((Math.log(x) / Math.log(2)) % 1 === 0);
}
const minValue = 10;
const maxValue = 600;
for (let i = minValue; i <= maxValue; i++) {
    if (recursion(i)) {
        console.log(i);
    }
}
