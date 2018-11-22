// // Declarete function

function plusTen(number) {
    console.log(number + 10);
}
plusTen();

function multiplyByThree(number) {
    return number * 3;
    // console.log(number * 3);
}
multiplyByThree();

function minusTen(number) {
    console.log(number - 20);
}

minusTen();

// Task 1,1

function renderCallback(number) {
    setTimeout(() => {
        plusTen(number);
    }, 1000);
    setTimeout(() => {
        console.log(multiplyByThree(number));
    }, 2000);
    setTimeout(() => {
        minusTen(number);
    }, 3000);
}
renderCallback(10);
