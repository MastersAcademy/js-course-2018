function rec(x) {
    if (x > 1) {
        return rec(x / 2);
    }
    return x === 1;
}
for (let i = 10; i <= 600; i++) {
    if (rec(i)) {
        console.log(i);
    }
}
