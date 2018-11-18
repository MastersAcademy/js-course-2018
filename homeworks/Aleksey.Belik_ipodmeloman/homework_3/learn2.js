function a2(n) {
    if (n > 1) {
        return a2(n / 2);
    }
    if (n === 1) {
        return true;
    }
    return false;
}
function b(x, y) {
    for (let i = x; i <= y; i++) {
        if (a2(i) === true) {
            console.log(i);
        }
    }
}
b(10, 600);
