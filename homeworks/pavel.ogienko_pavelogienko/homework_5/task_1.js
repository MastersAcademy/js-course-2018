function sumNumber(mass) {
    const result = [];
    mass.reduce((summa, value) => {
        result.push(summa + value);
        return summa + value;
    }, 0);
    return result;
}
console.log(sumNumber([10, -10, 10, -10, 10]));
console.log(sumNumber([0, 0, 0, 0, 0]));
console.log(sumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
