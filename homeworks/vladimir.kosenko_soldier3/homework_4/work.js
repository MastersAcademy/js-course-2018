function logNumbers(num) {
    setTimeout(() => {
        const x = num + 10;
        console.log(x);
        setTimeout(() => {
            const y = x * 3;
            console.log(y);
            setTimeout(() => {
                const z = y - 20;
                console.log(z);
            }, 1000);
        }, 1000);
    }, 1000);
}

logNumbers(10);

function first(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const i = num + 10;
            console.log(i);
            resolve(i);
        }, 1000);
    });
}

function second(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const i = num * 3;
            console.log(i);
            resolve(i);
        }, 1000);
    });
}

function thіrd(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const i = num - 20;
            console.log(i);
            resolve(i);
        }, 1000);
    });
}

function logNumbersPromise(num) {
    first(num).then((result) => {
        second(result).then((resolv) => {
            thіrd((resolv));
        });
    });
}

logNumbersPromise(20);

async function asincFun(num) {
    const log1 = await first(num);
    const log2 = await second(log1);
    await thіrd(log2);
}

asincFun(40);
