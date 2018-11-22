// Declarete function

function plusTen(number) {
    const result = number + 10;
    console.log(result);
    return result;
}
plusTen();

function multiplyByThree(number) {
    const result = number * 3;
    console.log(result);
    return result;
}
multiplyByThree(plusTen(20));

function minusTen(number) {
    const result = number - 10;
    console.log(result);
    return result;
}

minusTen(multiplyByThree());
