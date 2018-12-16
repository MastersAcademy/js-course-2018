const obj = { b: 'c', d: { e: 'f' } };

function getKeys(object) {
    const keys = Object.keys(object);
    return keys;
}

function innerCopy(object) {
    const copy = {};
    getKeys(object).forEach((key) => {
        copy[key] = (object[key] != null && typeof (object[key]) === 'object') ? innerCopy(object[key]) : object[key];
    });
    return copy;
}

const objCopy = innerCopy(obj);
console.log(objCopy.d);
