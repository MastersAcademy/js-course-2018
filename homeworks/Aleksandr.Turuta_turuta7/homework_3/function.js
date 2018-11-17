function sq(n) {
    return n * n;
}
function arrNew(p, x) {
    const arr = [];
    let arr2 = [];
    for (let i = 0; i <= p; i += x) {
        arr.push(i);
    }
    arr2 = arr.map(elem => elem * elem);

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
