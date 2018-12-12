// Task 1.1 (callbacks)

function summ(number, callback) {
    setTimeout(
        () => {
            const addTen = number + 10;
            callback(addTen);
            console.log(addTen);
        },
        1000,
    );
}

function mult(number, callback) {
    setTimeout(
        () => {
            const multThree = number * 3;
            callback(multThree);
            console.log(multThree);
        },
        1000,
    );
}

function sub(number) {
    setTimeout(
        () => {
            const subtractTwenty = number - 20;
            console.log(subtractTwenty);
        },
        1000,
    );
}


const logNumbers = (inputNumber) => {
    summ(inputNumber, (resultSumm) => {
        mult(resultSumm, (resultMult) => {
            sub(resultMult);
        });
    });
};


logNumbers(3);

// Task 1.2 (Promises)

function addTenPromise(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                resolve(number + 10);
                console.log(number + 10);
            },
            1000,
        );
    });
}

function multiplyThreePromise(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                resolve(number * 3);
                console.log(number * 3);
            },
            1000,
        );
    });
}

function subtractTwentyPromise(number) {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                resolve(number - 20);
                console.log(number - 20);
            },
            1000,
        );
    });
}

function logNumbersByPromise(number) {
    addTenPromise(number)
        .then(result => multiplyThreePromise(result))
        .then(result => subtractTwentyPromise(result));
}

setTimeout(logNumbersByPromise, 4000, 2);

// Task 1.3 (async/await)

async function logNumbersByAsync(number) {
    let result = await addTenPromise(number);
    result = await multiplyThreePromise(result);
    await subtractTwentyPromise(result);
}

setTimeout(logNumbersByAsync, 8000, 1);
