// Declarate function

function plusTen(number) {
    return number + 10;
}

function multiplyThree(number) {
    return number * 3;
}

function minusTwenty(number) {
    return number - 20;
}

const time = 1000;

// Task 1.1

function renderMyCallback(number) {
    setTimeout(
        (firstArg) => {
            setTimeout(
                (secondArg) => {
                    setTimeout(
                        (thirdArg) => {
                            console.log(minusTwenty(thirdArg));
                        },
                        time,
                        multiplyThree(secondArg),
                    );
                    console.log(multiplyThree(secondArg));
                },
                time,
                plusTen(firstArg),
            );
            console.log(plusTen(firstArg));
        },
        time,
        number,
    );
}
renderMyCallback(11);

// Task 1.2
// decFunction = declareted function at began

function promiseDelay(number, decFunction, ms = time) {
    return new Promise((resolve) => {
        const promiseValue = decFunction(number);
        setTimeout(() => {
            console.log(promiseValue);
            resolve(promiseValue);
        }, ms);
    });
}

function renderMyPromise(number) {
    promiseDelay(number, plusTen)
        .then(result => promiseDelay(result, multiplyThree))
        .then(result => promiseDelay(result, minusTwenty));
}
renderMyPromise(40);

// Task 1.3

async function renderMyAwait(number) {
    const awaitFirst = await promiseDelay(number, plusTen, time);
    const awaitSecond = await promiseDelay(awaitFirst, multiplyThree, time);
    await promiseDelay(awaitSecond, minusTwenty, time);
}

renderMyAwait(20);
