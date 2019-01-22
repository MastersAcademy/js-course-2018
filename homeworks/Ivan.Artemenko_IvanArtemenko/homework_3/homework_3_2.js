function pow(n) {
    if (n === 2) {
        return true;
    } if (n % 2 === 0) {
        return pow(n / 2);
    }
    return false;
}
for (let i = 10; i <= 600; i++) {
    if (pow(i)) {
        console.log(i);
    }
}
