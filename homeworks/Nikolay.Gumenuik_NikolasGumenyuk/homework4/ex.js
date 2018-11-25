const num = 20;

//promise 

function setTimePromise(num) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(console.log(num += 10)), 1000);
        setTimeout(() => resolve(console.log(num *= 3)), 1000);
        setTimeout(() => resolve(console.log(num -= 20)), 1000);
    });
}

setTimePromise(num);
//vanila js

function setTime(num) {
    setTimeout(() => console.log(num += 10), 1000);
    setTimeout(() => console.log(num *= 3), 2000);
    setTimeout(() => console.log(num -= 20), 3000);
}

setTime(num);

//asunc/await function

async function setTimeAsync(num) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(num += 10), 1000);
        setTimeout(() => resolve(console.log(num *= 3)), 2000);
        setTimeout(() => resolve(console.log(num -= 20)), 3000);
    });

    let res = await promise;
    console.log(res);
}

setTimeAsync(num);

//callback function

function setTimeCallback(num, callback) {
    setTimeout(() => callback(num += 10), 1000);
    setTimeout(() => callback(num *= 3), 2000);
    setTimeout(() => callback(num -= 20), 3000);
}

setTimeCallback(num, function(num) {
    console.log(num);
});