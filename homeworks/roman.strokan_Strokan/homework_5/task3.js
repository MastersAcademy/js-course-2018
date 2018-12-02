const objToCopy = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const objCopy = {};
    Object.keys(obj).forEach((key) => {
        objCopy[key] = obj[key];
    });
    return objCopy;
}
const objCopy = innerCopy(objToCopy);
console.log(objCopy);
console.log(objCopy.d);
