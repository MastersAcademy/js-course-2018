const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(source) {
    const clone = Object.assign({}, source);
    Object.keys(clone).forEach((key) => {
        if (typeof clone[key] == 'object') {
            clone[key] = innerCopy(clone[key]);
        }
    });
    return clone;
}

const objCopy = innerCopy(obj);
console.log(objCopy);
