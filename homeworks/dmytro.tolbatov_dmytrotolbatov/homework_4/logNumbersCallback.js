function plusTen(firstNumber, callback) {
    setTimeout(() => {
        console.log(firstNumber + 10);
        callback(firstNumber + 10);
    }, 1000);
}

function multiplyThree(secondNumber, callback) {
    setTimeout(() => {
        console.log(secondNumber * 3);
        callback(secondNumber * 3);
    }, 2000);
}

function minusTwenty(thirdNumber) {
    setTimeout(() => {
        console.log(thirdNumber - 20);
    }, 3000);
}

function logNumbers(number) {
    plusTen(number, (firstResult) => {
        multiplyThree(firstResult, (secondResult) => {
            minusTwenty(secondResult);
        });
    });
}

logNumbers(4);
