const firstArray = [10, -10, 10, -10, 10];
const secondArray = [0, 0, 0, 0, 0];
const thirdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArray = (array) => {
    let result = 0;
    return array.map((element) => {
        result += element;
        return result;
    });
};
console.log(sumArray(firstArray));
console.log(sumArray(secondArray));
console.log(sumArray(thirdArray));
