function recursion(num) {
    if (num === 2) {
        return 1;
    }
    if (num % 2 === 0) {
        return recursion(num / 2);
    }
    return 0;
}
const min = 10;
const max = 600;
for (let i = min; i <= max; i++) {
    if (recursion(i)) {
        console.log(i);
    }
}
