// // Declarete function

function plusTen(number) {
    return number + 10;
}

function multiplyThree(number) {
    return number * 3;
}

function minusTen(number) {
    return number - 20;
}

// Task 1.1

// function renderMyCallback(number) {
//     setTimeout(
//         (firstArg) => {
//             setTimeout(
//                 (secondArg) => {
//                     setTimeout(
//                         (thirdArg) => {
//                             console.log(minusTen(thirdArg));
//                         },
//                         1000,
//                         multiplyThree(secondArg),
//                     );
//                     console.log(multiplyThree(secondArg));
//                 },
//                 1000,
//                 plusTen(firstArg),
//             );
//             console.log(plusTen(firstArg));
//         },
//         1000,
//         number,
//     );
// }
// renderMyCallback(11);

// Task 1.2
// decFunction = declareted function at began

function promiseDelay(number, decFunction, ms = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const promiseValue = decFunction(number);
            console.log(promiseValue);
            resolve(promiseValue);
        }, ms);
    });
}

function renderMyPromise(number) {
    promiseDelay(number, plusTen)
        .then(result => promiseDelay(result, multiplyThree))
        .then(result => promiseDelay(result, minusTen));
}
renderMyPromise(11);
