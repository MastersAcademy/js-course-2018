const isPowerOfTwo = (n) => {
    if (n % 2 !== 0) {
        return false;
    }
    if (n <= 2) {
        return true;
    }
    return isPowerOfTwo(n / 2);
};

for (let i = 10; i <= 600; i++) {
    if (isPowerOfTwo(i)) {
        console.log(i);
    }
}
