function stepen(num) {
    const result = num / 2;
    if (result < 2) {
        return false;
    } if (result === 2) {
        return true;
    }
    return stepen(result);
}
for (let i = 10; i <= 600; i++) {
    if (stepen(i) === true) {
        console.log(i);
    }
}
