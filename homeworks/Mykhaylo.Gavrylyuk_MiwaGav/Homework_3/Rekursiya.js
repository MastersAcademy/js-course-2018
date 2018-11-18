function step(n) {
    const res = n / 2;
    if (res < 2) { return false; }
    if (res === 2) {
        return true;
    }
    return step(res);
}
for (let j = 10; j <= 600; j++) {
    if (step(j) === true) {
        console.log(j);
    }
}
