function isPowerOfTwo(number) {
    const result = number / 2;
    if (result < 2) {
        return false;
    }
    if (result === 2) {
        return true;
    }
    return isPowerOfTwo(result);
}

for (let i = 10; i <= 600; i++) {
    if (isPowerOfTwo(i)) {
        console.log(i);
    }
}
