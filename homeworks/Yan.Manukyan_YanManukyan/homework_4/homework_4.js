function sum(number) {
    return number + 10;
}

function multiply(number) {
    return number * 3;
}

function minus(number) {
    return number - 20;
}


// Callback

function NumCallback(number) {
    setTimeout((res1) => {
        setTimeout((res2) => {
            setTimeout((res3) => {
                console.log(minus(res3));
            }, 1000, multiply(res2));
            console.log(multiply(res2));
        }, 1000, sum(res1));
        console.log(sum(res1));
    }, 1000, number);
}
NumCallback(15);


// Promise

function NumPromise(num, SomeFunction) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(SomeFunction(num));
            resolve(SomeFunction(num));
        }, 1000);
    });
}

function Promise2(number) {
    NumPromise(number, sum)
        .then(resolve => NumPromise(resolve, multiply))
        .then(resolve => NumPromise(resolve, minus));
}

Promise2(15);


// Async

async function AsyncFunc(number) {
    const Num1 = await NumPromise(number, sum);
    console.log(Num1);
    const Num2 = await NumPromise(Num1, multiply);
    console.log(Num2);
    const Num3 = await NumPromise(Num2, minus);
    console.log(Num3);
}
AsyncFunc(15);
