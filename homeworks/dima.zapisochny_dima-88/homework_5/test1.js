const arr = [1, 2, 3, 4, 5];
function sumArr() {
    let sum = 0;
    return (num) => {
        sum += num;
        return sum;
    };
}
const sum = arr.map(sumArr());
console.log(sum);
