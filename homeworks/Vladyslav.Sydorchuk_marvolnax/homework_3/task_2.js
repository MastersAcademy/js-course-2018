function reccursion(n) {
    if (n === 2) {
        return true;
    } if (n % 2 === 0) {
        return reccursion(n / 2);
    }
    return false;
}
for (let i = 10; i <= 600; i++) {
    if (reccursion(i)) {
        console.log(i);
    }
}
