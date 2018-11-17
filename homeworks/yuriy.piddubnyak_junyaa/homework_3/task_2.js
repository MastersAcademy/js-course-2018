function func(x) {
    if (typeof x !== 'number') {
        return 'Not a number';
    }
    while (x > 1 && x / 2 !== 0 && x % 2 === 0) {
        x /= 2;
    }
    if (x === 1) return true;
    return false;
}
const min = 10;
const max = 600;
for (let a = min; a <= max; a++) {
    if (func(a)) {
        console.log(a);
    }
}
