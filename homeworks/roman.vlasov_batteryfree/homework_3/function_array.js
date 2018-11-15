function degree(a) {
    return a * a;
}
function arraystep(a, b) {
    const arr = [];
    for (let i = 0; i <= (parseInt(a / b, 10)); i++) {
        arr[i] = i * b;
    }
    return arr;
}
const arr = arraystep(32, 4);
for (let i = 0; i < arr.length; i++) {
    arr[i] = degree(arr[i]);
}
const c = arr.reduce((a, b) => a + b, 0);
console.log(c);
