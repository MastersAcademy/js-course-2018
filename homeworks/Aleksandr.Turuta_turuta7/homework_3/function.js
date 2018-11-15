function sq(n) {
    const x = n ** 2;
    return (x);
}
function arrNew(p, x) {
    const arr = [];
    const arr2 = [];
    for (let i = 0; i <= p; i += x) {
        arr.push(i);
    }
    for (let j = 0; j < arr.length; j++) {
        arr2[j] = arr[j] ** 2;
    }
    console.log(arr);
    console.log(arr2);
    console.log(arr2.reduce((a, b) => a + b));
}

// 1.1
console.log(sq(5));
console.log(sq(15));
console.log(sq(53));
// 1.2;1.3;1.4
arrNew(32, 4);
