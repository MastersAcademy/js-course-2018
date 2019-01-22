const startNumber = 10;

function logNumbers(number) {
    console.log(number);
    return number;
}

// === this code is working to
// setTimeout(() => {
//     const resultAdding = logNumbers(startNumber + 10);
//     setTimeout(() => {
//         const resultMultiply = logNumbers(resultAdding * 3);
//         setTimeout(() => {
//             logNumbers(resultMultiply - 20);
//         }, 3000);
//     }, 2000);
// }, 1000);

function addTen(number, callback) {
    setTimeout(() => {
        const result = logNumbers(number + 10);
        callback(result);
    }, 1000);
}

function multiplyThree(number, callback) {
    setTimeout(() => {
        const result = logNumbers(number * 3);
        callback(result);
    }, 2000);
}

function minuseTwenty(number) {
    setTimeout(() => {
        logNumbers(number - 20);
    }, 3000);
}

function calculateAll(number) {
    addTen(number, (result) => {
        multiplyThree(result, minuseTwenty);
    });
}

calculateAll(startNumber);
