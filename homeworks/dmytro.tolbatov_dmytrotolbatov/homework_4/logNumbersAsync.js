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

async function logNumbers(number) {
    const firstResult = await plusTen(number);
    const secondResult = await multiplyThree(firstResult);
    await minusTwenty(secondResult);
}

logNumbers(4);
