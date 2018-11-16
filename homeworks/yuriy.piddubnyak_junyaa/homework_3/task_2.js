function func(x) {
    if (typeof x !== 'number') {
        return 'Not a number';
    }
    return (Math.log(x) / Math.log(2)) % 1 === 0;
}
const min = 10;
const max = 600;
for (let a = min; a <= max; a++) {
    if (func(a)) {
        console.log(a);
    }
}
