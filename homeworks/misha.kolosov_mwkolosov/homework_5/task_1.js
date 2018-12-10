const arr = [1, 2, 3, 4, 5];
function arrSum() {
    let sum = 0;
    return (num) => {
        sum += num;
        return sum;
    };
}
const newArr = arr.map(arrSum());
console.log(newArr);
