const objToCopy = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const objCopy = {};
    Object.keys(obj).forEach((key) => {
        if (typeof (obj[key]) !== 'object') {
            objCopy[key] = obj[key];
        } else {
            objCopy[key] = innerCopy(obj[key]);
        }
    });
    return objCopy;
}
const objCopy = innerCopy(objToCopy);
console.log(objCopy);
console.log(objCopy.d);
