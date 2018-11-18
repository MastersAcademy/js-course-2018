function Pow(a) {
    return a * a;
}

function ReturnArray(max, step) {
    const arr = [];
    let a = 0;
    for (let i = 0; i <= max; i++) {
        arr[i] = a;
        a += step;
    }
}

function PowArr(arr) {
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = Pow(arr[i]);
    }
    return arr2;
}

function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(Pow(5));
console.log(Pow(15));
console.log(Pow(53));
console.log(ReturnArray(50, 5));
console.log(ReturnArray(32, 4));
console.log(PowArr(ReturnArray(32, 4)));
console.log(Sum(PowArr(ReturnArray(32, 4))));
