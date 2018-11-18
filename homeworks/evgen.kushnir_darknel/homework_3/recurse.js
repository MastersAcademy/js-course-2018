function number(i) {
    if (i > 1) {
        return number(i / 2);
    }
    return i === 1;
}
for (let i = 10; i <= 600; i++) {
    if (number(i)) {
        console.log(i);
    }
}
