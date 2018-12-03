const Obj = { b: 'c', d: { e: 'f' } };
function copy(a) {
    const objectCopy = {};
    Object.keys(a).forEach((key) => {
        if (typeof a[key] === 'object') {
            objectCopy[key] = copy(a[key]);
        } else {
            objectCopy[key] = a[key];
        }
    });
    return objectCopy;
}
console.log(copy(Obj));
console.log(copy(Obj.d));
