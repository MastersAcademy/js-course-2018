let result1;
let result2;
let result3;

function summ(number) {
    result1 = number + 10;
    console.log(result1);
}

function multiplication() {
    result2 = result1 * 3;
    console.log(result2);
}

function subtraction() {
    result3 = result2 - 20;
    console.log(result3);
}

function numbOperations() {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                subtraction();
            }, 3000);
            multiplication();
        }, 2000);
        summ(5);
    }, 1000);
}

numbOperations();


// Promise
function sum(number) {
    return number + 10;
}

function multiple(number) {
    return number * 3;
}

function subtract(number) {
    return number - 20;
}

function createPromise(number, delay = 1000) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(number);
            resolve(number);
        }, delay);
    });
    return promise;
}

createPromise(sum(5))
    .then(result => createPromise(multiple(result), 2000))
    .then(result => createPromise(subtract(result), 3000));

// Async
async function asyncFunc(num) {
    let result = num;
    result = await createPromise(sum(result));
    result = await createPromise(multiple(result));
    result = await createPromise(subtract(result));
    return result;
}

asyncFunc(5);
