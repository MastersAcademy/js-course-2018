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
    let currentValue = await addTen(number);
    currentValue = await multiplyThree(currentValue);
    await minuseTwenty(currentValue);
}

calculateAll(startNumber);
