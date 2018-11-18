function degree(n) {
    if (n > 1) {
        return degree(n / 2);
    }
    return n === 1;
}
for (let i = 10; i <= 600; i++) {
    if (degree(i)) {
        console.log(i);
    }
}
