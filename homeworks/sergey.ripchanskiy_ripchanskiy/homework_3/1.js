// 1.1 Square number without using js square method
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(15));
console.log(square(53));

// 1.2 Create array from range
function selectNumbers(maxValue, step) {
    const array = [];
    for (let i = 0; i <= maxValue; i += step) array.push(i);
    return array;
}
console.log(selectNumbers(50, 5));
console.log(selectNumbers(32, 4));

// 1.3 Square all elements of array
function squareEachElementOfArray(array) {
    return array.map(element => element * element);
}
console.log(squareEachElementOfArray(selectNumbers(32, 4)));

// 1.4 Returs sum of array elements
function sumOfArrayElements(array) {
    return array.reduce((a, b) => a + b);
}
console.log(sumOfArrayElements(squareEachElementOfArray(selectNumbers(32, 4))));
