const num = 20;

// promise

function setTimePromise(num) {
    let num = number.1;
    const promise = new Promise((resolve) => {
        setTimeout(number => resolve(console.log(number.1 += 10)), 1000);
        setTimeout(number => resolve(console.log(number.1 *= 3)), 1000);
        setTimeout(number => resolve(console.log(number.1 -= 20)), 1000);
    });
}

setTimePromise(num);
// vanila js

function setTime(number) {
    setTimeout(() => console.log(number += 10), 1000);
    setTimeout(() => console.log(number *= 3), 2000);
    setTimeout(() => console.log(number -= 20), 3000);
}

setTime(num);

// asunc/await function

async function setTimeAsync(number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(number += 10), 1000);
        setTimeout(() => resolve(number *= 3), 2000);
        setTimeout(() => resolve(number -= 20), 3000);
    });

    let res = await promise;
    console.log(res);
}

setTimeAsync(num);

// callback function

function setTimeCallback(number, callback) {
    setTimeout(() => callback(number += 10), 1000);
    setTimeout(() => callback(number *= 3), 2000);
    setTimeout(() => callback(number -= 20), 3000);
}

setTimeCallback(num, (num) => {
    console.log(num);
});
