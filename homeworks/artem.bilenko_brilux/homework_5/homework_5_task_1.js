const someArrFirstExample = [10, -10, 10, -10, 10];
const someArrSecondExample = [0, 0, 0, 0, 0];
const someArrThirdExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (array) => {
    let result = 0;
    return array.map((element) => {
        result += element;
        return result;
    });
};

console.log(sumArray(someArrFirstExample));
console.log(sumArray(someArrSecondExample));
console.log(sumArray(someArrThirdExample));
