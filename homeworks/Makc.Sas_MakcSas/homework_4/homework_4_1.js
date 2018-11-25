function startDate(value) {
    return value + 10;
}

function startDateMultiplyOnThree(value) {
    return value * 3;
}

function startDateMinusTwenty(value) {
    return value - 20;
}

// 1_1 Callback
function logNumbersCallback(value) {
    setTimeout((value1) => {
        setTimeout((value2) => {
            setTimeout((value3) => {
                console.log(startDateMinusTwenty(value3));
            }, 3000, startDateMultiplyOnThree(value2));
            console.log(startDateMultiplyOnThree(value2));
        }, 2000, startDate(value1));
        console.log(startDate(value1));
    }, 1000, value);
}
logNumbersCallback(0);

// 1_2 Promise
function promise(value, action, time) {
    const result = action(value);
    return new Promise((make) => {
        setTimeout(() => {
            console.log(result);
            make(result);
        }, time);
    });
}

function logNumbersPromise(value) {
    promise(value, startDate, 1000)
        .then(dateMultiplyOnThree => promise(dateMultiplyOnThree, startDateMultiplyOnThree, 2000))
        .then(dateMinusTwenty => promise(dateMinusTwenty, startDateMinusTwenty, 3000));
}
logNumbersPromise(0);

// 1_3 Async
async function logNumbersAsync(value) {
    const firstDate = await promise(value, startDate, 1000);
    const secondDate = await promise(firstDate, startDateMultiplyOnThree, 2000);
    await promise(secondDate, startDateMinusTwenty, 3000);
}
logNumbersAsync(0);
