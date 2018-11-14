
// 1.1
function func(a) {
    const b = a * a;
    // console.log(`${a}^2=${b}`);
    return b;
}
func(5);
func(15);
func(53);

// 1.2
function arrayCreation(a, b) {
    const arr = [];
    let c = 0;
    let i = 0;
    do {
        arr[i] = c;
        c += a;
        i++;
    } while (c <= b);
    /* for (let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    } */
    return arr;
}
arrayCreation(4, 32);

// 1.3
function arrayElementsSq(a) {
    const arr2 = [];
    for (let i = 0; i < a.length; i++) {
        arr2[i] = func(a[i]);
        // console.log(arr2[i]);
    }
    return arr2;
}
arrayElementsSq(arrayCreation(4, 32));

// 1.4
function arrayElementsSum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log(arrayElementsSum(arrayElementsSq(arrayCreation(4, 32))));
