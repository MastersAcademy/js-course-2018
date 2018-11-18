function checkMultiplicity(num) {
    num /= 2;
    if(num < 2) {
        return false;
    }
    if(num === 2) {
        return true;
    }
    return checkMultiplicity(num);
}

for (let i = 10; i < 600; i++) {
    if (checkMultiplicity(i) === true) {
        console.log(i);
    }
}
