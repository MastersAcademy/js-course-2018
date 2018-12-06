function array(arr) {
    const value = [];
    arr.reduce((summ, curr) => {
        value.push(summ + curr);
        return summ + curr;
    }, 0);
    return value;
}
console.log(array([10, -10, 10, -10, 10]));
console.log(array([0, 0, 0, 0, 0]));
console.log(array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
