function recurs(p) {
    if (p > 1) {
        return recurs(p / 2);
    }
    return p === 1;
}
for (let i = 10; i <= 600; i++) {
    if (recurs(i)) {
        console.log(i);
    }
}
