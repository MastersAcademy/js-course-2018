const exampleOne = [10, -10, 10, -10, 10];
const exampleTwo = [0, 0, 0, 0, 0];
const exampleThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumb(array) {
    let newArray = 0;
    return array.map((num) => {
        newArray += num;
        return newArray;
    });
}
console.log(sumNumb(exampleOne));
console.log(sumNumb(exampleTwo));
console.log(sumNumb(exampleThree));
