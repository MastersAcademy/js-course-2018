// Performing simple operations

function plusTen(num) {
    return num + 10;
}

function multiplyByThree(num) {
    return num * 3;
}

function subtractTwenty(num) {
    return num - 10;
}

// Task 1.1 Callbacks

function logNumbers1(num) {
    setTimeout((firstStep) => {
        setTimeout((secondStep) => {
            setTimeout((thirdStep) => {
                console.log(subtractTwenty(thirdStep));
            }, 1000, multiplyByThree(secondStep));
            console.log(multiplyByThree(secondStep));
        }, 1000, plusTen(firstStep));
        console.log(plusTen(firstStep));
    }, 1000, num);
}


// Task 1.2 Promises

function lnProm(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, 1000);
    });
}

function logNumbers2(num) {
    lnProm(plusTen(num))
        .then(
            result => lnProm(multiplyByThree(result)),
        )
        .then(
            result => lnProm(subtractTwenty(result)),
        );
}

// Task 1.3 async await

async function logNumbers3(num) {
    let result = num;
    result = await lnProm(plusTen(num));
    result = await lnProm(multiplyByThree(result));
    result = await lnProm(subtractTwenty(result));
    return result;
}

// Output logNumbers

const logNumbers = (num) => {
    logNumbers1(num);
    logNumbers2(num);
    logNumbers3(num);
};
logNumbers(10);
