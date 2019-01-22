// task 1
const firstArray = [10, -10, 10, -10, 10];
const secondArray = [0, 0, 0, 0, 0];
const lastArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addValue(array) {
    let counter = 0;
    return array.map((number) => {
        counter += number;
        return counter;
    });
}
console.log(addValue(firstArray));
console.log(addValue(secondArray));
console.log(addValue(lastArray));
