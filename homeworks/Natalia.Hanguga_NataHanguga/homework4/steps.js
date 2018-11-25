// promise
const num = 20;

function setTimePromise(number) {
    const promise = new Promise((resolve) => {
        setTimeout(() => (resolve(console.log(number += 10))), 1000);
    });
    promise.then(result => (setTimeout(() => (console.log(number *= 3)), 1000)));
    promise.then(result => (setTimeout(() => (console.log(number -= 20)), 2000)));
}

setTimePromise(num);


function setTime(number) {
    setTimeout(() => console.log(number += 10), 1000);
    setTimeout(() => console.log(number *= 3), 2000);
    setTimeout(() => console.log(number -= 20), 3000);
}

setTime(num);

// asunc/await function

async function setTimeAsync(number) {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(number += 10), 1000);
    });
    const res1 = await promise1;
    console.log(res1);
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(number *= 3), 1000);
    });
    const res2 = await promise2;
    console.log(res2);
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(number -= 20), 1000);
    });
    const res3 = await promise3;
    console.log(res3);
}

setTimeAsync(num);

// callback function

let setTimeCallback1=(number, callback)=> {
    setTimeout(() => callback(number += 10), 1000);
}

setTimeCallback1(num, (num) => {
    console.log(num);
    let setTimeCallback2=(number, callback)=> {
        setTimeout(() => callback(number *= 3), 1000);
    }
    setTimeCallback2(num, (num) => {
        console.log(num);
        let setTimeCallback3=(number, callback)=> {
            setTimeout(() => callback(number -= 20), 1000);
        }
        setTimeCallback3(num, (num) => {
            console.log(num);
        });
    });
});
