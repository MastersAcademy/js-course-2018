const object = { b: 'c', d: { e: 'f' } };
function copy(elem) {
    const objectClone = {};
    Object.keys(elem).forEach((key) => {
        if (typeof elem[key] === 'object') {
            objectClone[key] = copy(elem[key]);
        } else {
            objectClone[key] = elem[key];
        }
    });
    return objectClone;
}
console.log(copy(object));
console.log(copy(object.d));
