function isPower(v) {
    if (typeof v !== 'number') {
        return 'Not a number';
    }
    if (v === 1) {
        return true;
    }
    if (v % 2 !== 0 || v === 0) {
        return false;
    }
    return isPower(v / 2);
}

const min = 10;
const max = 600;
for (let a = min; a <= max; a++) {
    if (isPower(a)) {
        console.log(a);
    }
}
