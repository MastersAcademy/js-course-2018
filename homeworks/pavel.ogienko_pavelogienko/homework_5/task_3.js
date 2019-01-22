const obj = { b: 'c', d: { e: 'f' } };
console.log(obj);
const innerCopy = (object) => {
    const clone = {};
    Object.keys(object).forEach((prop) => {
        if (typeof (object[prop]) === 'object') {
            clone[prop] = innerCopy(object[prop]);
        } else {
            clone[prop] = object[prop];
        }
    });
    return clone;
};
const objCopy = innerCopy(obj);
console.log(objCopy);
console.log(objCopy.d);
