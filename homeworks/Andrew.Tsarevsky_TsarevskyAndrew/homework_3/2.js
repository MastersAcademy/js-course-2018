function twoSquared(number) {
    const result = number / 2;
    if (result < 2) {
        return false;
    }
    if (result === 2) {
        return true;
    }
    return twoSquared(result);
}

for (let i = 10; i <= 600; i++) {
    if (twoSquared(i)) {
        console.log(i);
    }
}
