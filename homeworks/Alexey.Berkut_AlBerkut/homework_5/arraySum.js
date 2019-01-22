const array1 = [10, -10, 10, -10, 10];
const array2 = [0, 0, 0, 0, 0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function array(input) {
    let newArray = 0;
    return input.map((num) => {
        newArray += num;
        return newArray;
    });
}

console.log(array(array1));
console.log(array(array2));
console.log(array(array3));
