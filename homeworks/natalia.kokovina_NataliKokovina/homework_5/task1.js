// function sumArray(arr) {
//     const newArr = [];
//     arr.reduce((sum, value) => {
//         const result = sum + value;
//         newArr.push(result);
//         return result;
//     }, 0);
//     return newArr;
// }
// console.log(sumArray([10, -10, 10, -10, 10]));
// console.log(sumArray([0, 0, 0, 0, 0]));
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sumArray(arr) {
    let newArr = 0;
    return arr.map((value) => {
        newArr += value;
        return newArr;
    });
}
console.log(sumArray([10, -10, 10, -10, 10]));
console.log(sumArray([0, 0, 0, 0, 0]));
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
