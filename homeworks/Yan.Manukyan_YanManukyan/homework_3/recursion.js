function recursion(num) {
    const res = num / 2;
    if (res < 2) {
        return false;
    }
    if (res === 2) {
        return true;
    }
    return recursion(res);
}
for (let i = 10; i <= 600; i++) {
    if (recursion(i)) {
        console.log(i);
    }
}
