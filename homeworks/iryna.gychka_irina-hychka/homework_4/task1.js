const rule1 = n => (n + 10);
const rule2 = n => (n * 3);
const rule3 = n => (n - 20);

// Task 1.1 Callback function solution
const logNumbersCallBAck = (n) => {
    setTimeout(() => {
        const a = rule1(n);
        console.log(`First ${a}`);
        setTimeout(() => {
            const b = rule2(a);
            console.log(`Second ${b}`);
            setTimeout(() => {
                const c = rule3(b);
                console.log(`Third ${c}`);
            }, 3000);
        }, 2000);
    }, 1000);
};


// Task 1.2 Promise solution
const prom = (n, rule, title, time) => (
    new Promise((resolve) => {
        setTimeout(() => {
            const a = rule(n);
            console.log(title + a);
            resolve(a);
        }, time);
    })
);

const logNumbersPromise = (n) => {
    const pr = prom(n, rule1, 'v2 First: ', 1000);
    pr.then(r => (
        prom(r, rule2, 'v2 Second: ', 2000)
    )).then(r => (
        prom(r, rule3, 'v2 Third: ', 3000)
    ));
};


// Task 1.3 Async-await solution
async function logNumbersAsync(n) {
    let r = await prom(n, rule1, 'v3 First: ', 1000);
    r = await prom(r, rule2, 'v3 Second: ', 2000);
    await prom(r, rule3, 'v3 Third: ', 3000);
}

logNumbersCallBAck(10);
logNumbersPromise(10);
logNumbersAsync(10);
