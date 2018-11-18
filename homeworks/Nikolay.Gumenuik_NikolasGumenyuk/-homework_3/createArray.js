function createArray() {
    const arr = [];
    let arr1 = [];
    const max = 32;
    const step = 4;
    for (let n = 0; n < max; n += step) {
        arr.push(n);
        console.log(n);
    }
    console.log(arr);
    arr1 = arr.map(el => el ** 2);
    console.log(arr1);
    const sum = arr1.reduce((a, b) => a + b);
    console.log(sum);
}

createArray();
