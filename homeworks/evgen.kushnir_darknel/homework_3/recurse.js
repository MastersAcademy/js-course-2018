function number(x) {
    if (x > 1) {
        return number(x / 2);
    }
    return x === 1;
}
for (let i = 10; i <= 600; i++) {
    if (number(i)) {
        console.log(i);
    }
}
