function amountElements() {
    let amount = 0;
    return (value) => {
        amount += value;
        return amount;
    };
}
function newMass(mass) {
    const newArray = mass;
    const previousAmount = amountElements();
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = previousAmount(newArray[i]);
    }
    return newArray;
}
console.log(newMass([10, -10, 10, -10, 10]));
console.log(newMass([0, 0, 0, 0, 0]));
console.log(newMass([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
