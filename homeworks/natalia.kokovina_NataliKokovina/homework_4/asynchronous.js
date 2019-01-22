function sumNumber(number) {
    return number + 10;
}

function multiplyNumber(number) {
    return number * 3;
}

function minusNumber(number) {
    return number - 20;
}


// variant 1 (Callback Hell):

function logNumbers1(number) {
    setTimeout((result1) => {
        setTimeout((result2) => {
            setTimeout((result3) => {
                console.log(minusNumber(result3));
            }, 1000, multiplyNumber(result2));
            console.log(multiplyNumber(result2));
        }, 1000, sumNumber(result1));
        console.log(sumNumber(result1));
    }, 1000, number);
}
logNumbers1(15);


// variant 2 (Promis):

function logNumbersPromise(num, typeFunction) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(typeFunction(num));
            resolve(typeFunction(num));
        }, 1000);
    });
}

function logNumbers2(number) {
    logNumbersPromise(number, sumNumber)
        .then(resolve => logNumbersPromise(resolve, multiplyNumber))
        .then(resolve => logNumbersPromise(resolve, minusNumber));
}

logNumbers2(15);


// variant 3 (async, await):

async function logNumbers3(number) {
    const firstNumber = await logNumbersPromise(number, sumNumber);
    console.log(firstNumber);
    const secondNumber = await logNumbersPromise(firstNumber, multiplyNumber);
    console.log(secondNumber);
    const thirdNumber = await logNumbersPromise(secondNumber, minusNumber);
    console.log(thirdNumber);
}
logNumbers3(15);
