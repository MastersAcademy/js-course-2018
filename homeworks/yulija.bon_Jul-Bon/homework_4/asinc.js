/* callback */

function logNumbers(num) {
    return setTimeout(() => {
        const x = num + 10;
        console.log(x);
        return setTimeout(() => {
            const y = x * 3;
            console.log(y);
            return setTimeout(() => {
                const z = y - 20;
                console.log(z);
            }, 3000);
        }, 2000);
    }, 1000);
}

logNumbers(100);

/* Promise */

function logNumbersPromice(num) {
    return new Promise((resolve) => { setTimeout(() => resolve(num), 1000); })
        .then((result) => { console.log(result + 10); return result + 10; })
        .then((result) => { console.log(result * 3); return result * 3; })
        .then((result) => { console.log(result - 20); return result - 20; });
}

logNumbersPromice(10);

/* Asinc Function */

async function logNumbersAsinc(num) {
    let x = num;
    await setTimeout(() => {
        console.log(x += 10);
    }, 1000);

    await setTimeout(() => {
        console.log(x *= 3);
    }, 2000);

    await setTimeout(() => {
        console.log(x -= 20);
    }, 3000);
}

logNumbersAsinc(30);
