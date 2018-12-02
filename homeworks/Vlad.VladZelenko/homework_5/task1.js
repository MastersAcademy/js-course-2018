function sumArr() {
    let result = 0;
    return (value) => {
        result += value;
        return result;
    };
}

function getArr(arr) {
    return arr.map(sumArr());
}
console.log(getArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
