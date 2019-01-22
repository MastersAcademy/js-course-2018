const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(objToCopy) {
    const result = {};
    Object.keys(objToCopy).forEach((key) => {
        if (typeof objToCopy[key] !== 'object') {
            result[key] = objToCopy[key];
        } else {
            result[key] = innerCopy(objToCopy[key]);
        }
    });
    return result;
}

console.log(obj);
console.log(innerCopy(obj));
