function plusTen(firstNumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(firstNumber + 10);
            resolve(firstNumber + 10);
        }, 1000);
    });
}

function multiplyThree(secondNumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(secondNumber * 3);
            resolve(secondNumber * 3);
        }, 2000);
    });
}

function minusTwenty(thirdNumber) {
    setTimeout(() => {
        console.log(thirdNumber - 20);
    }, 3000);
}

function logNumbers(number) {
    plusTen(number)
        .then(firstResult => multiplyThree(firstResult))
        .then(secondResult => minusTwenty(secondResult))
        .catch((error) => {
            console.log(error);
        });
}

logNumbers(4);
