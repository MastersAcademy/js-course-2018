function isNumeric(numeric) {
    return typeof numeric === 'number';
}

function square(numeric) {
    if (isNumeric(numeric)) {
        return numeric * numeric;
    }
    return false;
}

function createArray(maxValue, step) {
    const result = [];
    let i = 0;

    if (!isNumeric(maxValue) || !isNumeric(step)) {
        return false;
    }

    if (step < 1) {
        return false;
    }

    while (i <= maxValue) {
        result.push(i);
        i += step;
    }
    return result;
}

function elementsArrayToSquare(array) {
    const result = [];
    for (let i = 0; i < array.length; ++i) {
        result.push(square(array[i]));
    }
    return result;
}

function elementsArraySum(array) {
    let result = 0;
    for (let i = 0; i < array.length; ++i) {
        result += array[i];
    }
    return result;
}

console.log(square(5));
console.log(square(15));
console.log(square(53));

const testArray = createArray(32, 4);
console.log(testArray);

const testArray2 = elementsArrayToSquare(testArray);
console.log(testArray2);

console.log(elementsArraySum(testArray2));
