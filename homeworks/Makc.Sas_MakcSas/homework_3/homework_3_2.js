let startDate = 1;
function powerTwo(value) {
    if (startDate === value) {
        return true;
    }
    if (startDate > value) {
        return false;
    }
    startDate *= 2;
    return powerTwo(value);
}
for (let rangeNumbers = 10; rangeNumbers <= 600; rangeNumbers++) {
    if (powerTwo(rangeNumbers) === true) {
        console.log(rangeNumbers);
    }
}
