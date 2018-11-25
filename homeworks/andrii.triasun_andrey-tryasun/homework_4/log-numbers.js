const delay = 1000; // 1s

// Callback based solution
const logNumbersCallback = (number) => {
    setTimeout((a) => {
        console.log(a);
        setTimeout((b) => {
            console.log(b);
            setTimeout((c) => {
                console.log(c);
            }, delay, b - 20);
        }, delay, a * 3);
    }, delay, number + 10);
};

logNumbersCallback(10); // 20, 60, 40

// Promise based solution
const promise = number => new Promise((resolve) => {
    setTimeout(() => {
        console.log(number);
        resolve(number);
    }, delay);
});

const logNumbersPromise = (number) => {
    promise(number + 10)
        .then(a => promise(a * 3))
        .then(b => promise(b - 20));
};

logNumbersPromise(10); // 20, 60, 40

// Async/Await based solution
async function logNumbersAsync(number) {
    const a = await promise(number + 10);
    const b = await promise(a * 3);
    await promise(b - 20);
}

logNumbersAsync(10); // 20, 60, 40
