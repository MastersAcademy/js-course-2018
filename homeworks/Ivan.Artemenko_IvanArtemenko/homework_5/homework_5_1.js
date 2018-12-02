function amountElements() {
    let amount = 0;
    return (value) => {
        amount += value;
        return amount;
    };
}
const amountnum = amountElements(0);
const amountArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumAmountArr = amountArr.map(amountnum);
console.log(amountArr);
console.log(sumAmountArr);
