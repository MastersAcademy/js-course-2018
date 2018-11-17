function isNumeric(numeric) {
    return typeof numeric === 'number';
}

function square(numeric) {
    if (isNumeric(numeric)) {
        return numeric * numeric;
    }
    return false;
}

function fixDecimalNumbrer(number) {
    if (isNumeric(number)) {
        return parseFloat((number).toFixed(2));
    }
    return false;
}

function createArray(maxValue, step) {
    if (!isNumeric(maxValue) || !isNumeric(step)) {
        return false;
    }

    if (step <= 0) {
        return false;
    }

    const result = [];
    for (let i = 0; fixDecimalNumbrer(i) <= maxValue; i += step) {
        result.push(fixDecimalNumbrer(i));
    }
    return result;
}

console.log(square(5));
console.log(square(15));
console.log(square(53));

const testArray = createArray(32, 4);
console.log(testArray);

const testArray2 = testArray.map(square);
console.log(testArray2);

console.log(testArray2.reduce((x, y) => x + y));

const testArray3 = createArray(1, 0.02);
console.log(testArray3);
