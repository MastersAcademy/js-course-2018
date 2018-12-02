// 1.1

function pow(num) {
    return num * num;
}
console.log(pow(5));
console.log(pow(15));
console.log(pow(53));

// 1.2

function createarray(lngth, step) {
    const arr = [];
    for (let i = 0; i <= lngth; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(createarray(50, 5));
console.log(createarray(32, 4));

// 1.3

const arraypow = createarray(32, 4).map(num => pow(num));
console.log(arraypow);

//  1.4
const arraysum = arraypow.reduce((sum, number) => sum + number);
console.log(arraysum);
