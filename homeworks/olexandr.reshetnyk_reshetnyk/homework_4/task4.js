const input = 5;

function logNumbers1(num) {
    setTimeout(() => {
        const value1 = num + 10;
        console.log(`[logNumber1] ${value1}`);
        setTimeout((value1Arg) => {
            const value2 = value1Arg * 3;
            console.log(`[logNumber1] ${value2}`);
            setTimeout((value2Arg) => {
                const value3 = value2Arg - 20;
                console.log(`[logNumber1] ${value3}`);
            }, 1000, value2);
        }, 1000, value1);
    }, 1000);
}

function logNumbers2(num) {
    const promise = new Promise(((resolve) => {
        setTimeout(() => {
            const value1 = num + 10;
            console.log(`[logNumber2] ${value1}`);
            resolve(value1);
        }, 1000);
    }));

    promise
        .then(value1 => new Promise(((resolve) => {
            setTimeout(() => {
                const value2 = value1 * 3;
                console.log(`[logNumber2] ${value2}`);
                resolve(value2);
            }, 1000);
        })))
        .then(value2 => new Promise(((resolve) => {
            setTimeout(() => {
                const value3 = value2 - 20;
                console.log(`[logNumber2] ${value3}`);
                resolve(value3);
            }, 1000);
        })));
}

async function logNumbers3(num) {
    const result1 = await new Promise(((resolve) => {
        const value1 = num + 10;
        setTimeout(() => {
            console.log(`[logNumber3] ${value1}`);
            resolve(value1);
        }, 1000);
    }));
    const result2 = await new Promise(((resolve) => {
        const value2 = result1 * 3;
        setTimeout(() => {
            console.log(`[logNumber3] ${value2}`);
            resolve(value2);
        }, 1000);
    }));
    await new Promise(((resolve) => {
        const value3 = result2 - 20;
        setTimeout(() => {
            console.log(`[logNumber3] ${value3}`);
            resolve(value3);
        }, 1000);
    }));
}

logNumbers1(input);
logNumbers2(input);
logNumbers3(input);
