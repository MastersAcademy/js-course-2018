function doFiboArray(max = 100) {
    const fiboArray = [0];
    let number = 1;
    while (number <= max) {
        fiboArray.push(number);
        number = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];
    }
    return fiboArray;
}

module.exports = { doFiboArray };
