const someArr1 = [10, -10, 10, -10, 10];
const someArr2 = [0, 0, 0, 0, 0];
const someArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayTransform(array) {
    let currentSum = 0;
    return array.map((i) => {
        currentSum += i;
        return currentSum;
    });
}

console.log(arrayTransform(someArr1));
console.log(arrayTransform(someArr2));
console.log(arrayTransform(someArr3));
