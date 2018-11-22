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

function renderMyCallback(number) {
    setTimeout(
        (firstArg) => {
            setTimeout(
                (secondArg) => {
                    setTimeout(
                        (thirdArg) => {
                            console.log(minusTen(thirdArg));
                        },
                        1000,
                        multiplyThree(secondArg),
                    );
                    console.log(multiplyThree(secondArg));
                },
                1000,
                plusTen(firstArg),
            );
            console.log(plusTen(firstArg));
        },
        1000,
        number,
    );
}
renderMyCallback(11);

// Task 1.2
