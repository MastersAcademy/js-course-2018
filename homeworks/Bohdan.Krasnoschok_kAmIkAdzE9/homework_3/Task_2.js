function checkMultiplicity(num) {
    const res = num / 2;
    if (res < 2) {
        return false;
    }
    if (res === 2) {
        return true;
    }
    return checkMultiplicity(res);
}

for (let i = 10; i < 600; i++) {
    if (checkMultiplicity(i) === true) {
        console.log(i);
    }
}
