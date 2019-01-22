// Initial functions

const additionWithTen = num => (num + 10);
const multiplicationByThree = num => (num * 3);
const subtractionOfTwenty = num => (num - 20);

// Callback

function logNumbersCallback(num) {
    setTimeout((result1) => {
        console.log(additionWithTen(result1));
        setTimeout((result2) => {
            console.log(multiplicationByThree(result2));
            setTimeout((result3) => {
                console.log(subtractionOfTwenty(result3));
            }, 1000, multiplicationByThree(result2));
        }, 1000, additionWithTen(result1));
    }, 1000, num);
}

logNumbersCallback(10);

// Promise

function addPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve(num);
        }, 1000, num);
    });
}

function logNumbersPromise(num) {
    addPromise(additionWithTen(num))
        .then(result => addPromise(multiplicationByThree(result)))
        .then(result => addPromise(subtractionOfTwenty(result)));
}

logNumbersPromise(10);

// Async/await

async function logNumbersAsync(num) {
    let result = num;
    result = await addPromise(additionWithTen(result));
    result = await addPromise(multiplicationByThree(result));
    result = await addPromise(subtractionOfTwenty(result));
    return result;
}

logNumbersAsync(10);
