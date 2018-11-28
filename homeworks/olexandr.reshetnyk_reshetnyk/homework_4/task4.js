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

function getValue(num, calcFunc) {
    return new Promise(((resolve) => {
        setTimeout(() => {
            const value = calcFunc(num);
            console.log(`${value}`);
            resolve(value);
        }, 1000);
    }));
}

function calcFirstValue(n) {
    return n + 10;
}

function calcSecondValue(n) {
    return n * 3;
}

function calcThirdValue(n) {
    return n - 20;
}

function logNumbers2(num) {
    getValue(num, calcFirstValue)
        .then(value1 => getValue(value1, calcSecondValue))
        .then(value2 => getValue(value2, calcThirdValue));
}

async function logNumbers3(num) {
    const result1 = await getValue(num, calcFirstValue);
    const result2 = await getValue(result1, calcSecondValue);
    await getValue(result2, calcThirdValue);
}

logNumbers1(input);
logNumbers2(input);
logNumbers3(input);
