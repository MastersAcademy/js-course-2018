function isNumber(a) {
    if (a === null || a <= 2) {
        console.log('Try again');
        return 0;
    }
    return (a === 16 || a === 32
        || a === 64 || a === 128 || a === 256 || a === 512);
}

for (let i = 10; i < 600; i++) {
    if (isNumber(i)) {
        console.log(i);
    }
}
