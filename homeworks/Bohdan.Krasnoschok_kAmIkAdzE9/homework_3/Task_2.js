function checkMultiplicity(num) {
    return checkMultiplicity(num / 2);
}

for (let i = 10; i < 600; i++) {
    if (checkMultiplicity(i) === true) {
        console.log(i);
    }
}
