function summElements() {
    let summ = 0;
    return (value) => {
        summ += value;
        return summ;
    };
}

function newMass(mass) {
    const newArray = mass;
    const previousSumm = summElements();
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = previousSumm(newArray[i]);
    }
    return newArray;
}

console.log(newMass([10, -10, 10, -10, 10]));
console.log(newMass([0, 0, 0, 0, 0]));
console.log(newMass([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
