// async
function createPromise(number, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, time);
    });
}

async function logNumbersAsync(number) {
    let toPrint = number;
    toPrint = await createPromise(toPrint + 10, 1000);
    console.log(toPrint);
    toPrint = await createPromise(toPrint * 3, 2000);
    console.log(toPrint);
    toPrint = await createPromise(toPrint - 20, 3000);
    console.log(toPrint);
}
logNumbersAsync(5);
