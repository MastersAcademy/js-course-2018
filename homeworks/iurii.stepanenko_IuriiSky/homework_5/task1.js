const mas1 = [10, -10, 10, -10, 10];
const mas2 = [0, 0, 0, 0, 0];
const mas3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(arr) {
    let sum = 0;
    return arr.map((element) => {
        sum += element;
        return sum;
    });
}

console.log(sumArray(mas1));
console.log(sumArray(mas2));
console.log(sumArray(mas3));
