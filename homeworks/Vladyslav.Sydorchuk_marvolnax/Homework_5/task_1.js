// task-1

function summElements() {
    let summ = 0;
    return (value) => {
        summ += value;
        return summ;
    };
}

function newMass(mass) {
    const newArr = summElements();
    return mass.map(newArr);
}
let someArr = [10, -10, 10, -10, 10];
console.log(newMass(someArr));

someArr = [0, 0, 0, 0, 0];
console.log(newMass(someArr));

someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newMass(someArr));
