function rec(x) {
    if (x === 2) {
        return true;
    }
    if (x > 2) {
        return rec(x / 2);
    }
    return false;
}
for (let i = 10; i <= 600; i++) {
    if (rec(i) === true) {
        console.log(i);
    }
}