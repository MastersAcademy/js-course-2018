// 1.1 Square function
function square(num) {
    return num ** 2;
}
console.log(square(5));
console.log(square(15));
console.log(square(53));
// 1.2 List of numbers with certain step
function createList(listLength, step) {
    const listOfNumbers = [];
    for (let i = 0; i <= listLength; i += step) {
        listOfNumbers.push(i);
    }
    return listOfNumbers;
}
console.log(createList(50, 5));
console.log(createList(32, 4));
// 1.3 Square of all numbers in a list
function squareList(array) {
    array.map(el => square(el));
}
console.log(squareList(createList(32, 4)));
// 1.4 Sum of all numbers in squared list
function sumOfSquaredList(squaredArray) {
    return squaredArray.reduce(
        (initial, current) => initial + current,
    );
}
console.log(sumOfSquaredList(squareList(createList(32, 4))));
