function powerTwo(value) {
    if (value === 1) {
        return true;
    }
    if (value > 1) {
        return powerTwo(value / 2);
    }
    return false;
}
for (let rangeNumbers = 10; rangeNumbers <= 600; rangeNumbers++) {
    if (powerTwo(rangeNumbers) === true) {
        console.log(rangeNumbers);
    }
}
