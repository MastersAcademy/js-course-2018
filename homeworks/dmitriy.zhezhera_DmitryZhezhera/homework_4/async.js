const startNumber = 10;

function logNumbers(number) {
    console.log(number);
    return number;
}

function addTen(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(logNumbers(number + 10)), 1000);
    });
}

function multiplyThree(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(logNumbers(number * 3)), 2000);
    });
}

function minuseTwenty(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(logNumbers(number - 20)), 2000);
    });
}

async function calculateAll(number) {
    /* eslint-disable no-unused-vars */
    let currentValue = number;
    /* eslint-enable no-unused-vars */
    currentValue = await addTen(currentValue);
    currentValue = await multiplyThree(currentValue);
    currentValue = await minuseTwenty(currentValue);
}

calculateAll(startNumber);
