const Obj = { b: 'c', d: { e: 'f' } };
function copy(a) {
    return Object.assign({}, a);
}
function copy2(a) {
    const Copy = {};
    Object.keys(a).forEach((key) => {
        Copy.d = a[key];
    });
    return Copy;
}
console.log(copy(Obj));
console.log(copy2(Obj));
