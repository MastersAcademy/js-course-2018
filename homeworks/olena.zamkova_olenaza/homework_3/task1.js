const square = x => x * x;

console.log(square(5));
console.log(square(15));
console.log(square(53));

const sequence = (max, diff) => {
    const list = [];
    let member = 0;

    while (member <= max) {
        list.push(member);
        member += diff;
    }

    return list;
};

console.log(sequence(50, 5));

const arr = sequence(32, 4);
console.log(arr);

const arrSqr = arr.map(item => item * item);
console.log(arrSqr);

const sum = arrSqr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
);
console.log(sum);
