function recursion(number) {
    if (number > 1) {
        return recursion(number / 2);
    }
    return number === 1;
}

const max = 600;
const min = 10;
for (let i = min; i < max; i++) {
    if (recursion(i) === true) {
        console.log(i);
    }
}
