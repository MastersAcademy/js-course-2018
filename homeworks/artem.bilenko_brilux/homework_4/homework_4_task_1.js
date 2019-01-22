const plus = (number) => {
    const result = number + 10;
    console.log(result);
    return result;
};
const multiply = (number) => {
    const result = number * 3;
    console.log(result);
    return result;
};
const minus = (number) => {
    const result = number - 20;
    console.log(result);
};

// callback

const logNumbersCallback = (number) => {
    setTimeout((beforePlus) => {
        setTimeout((afterPlus) => {
            setTimeout((afterMultiply) => {
                minus(afterMultiply);
            }, 3000, multiply(afterPlus));
        }, 2000, plus(beforePlus));
    }, 1000, number);
};
logNumbersCallback(10);

// promise

const promise = (number, func, delay) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(func(number));
    }, delay);
});

const logNumbersPromise = (number) => {
    promise(number, plus, 1000).then((afterPlus) => {
        promise(afterPlus, multiply, 2000).then((afterMultiply) => {
            promise(afterMultiply, minus, 3000);
        });
    });
};
logNumbersPromise(10);

// async

const logNumbersAsync = async (number) => {
    const afterPlus = await promise(number, plus, 1000);
    const afterMultiply = await promise(afterPlus, multiply, 2000);
    await promise(afterMultiply, minus, 3000);
};
logNumbersAsync(10);
