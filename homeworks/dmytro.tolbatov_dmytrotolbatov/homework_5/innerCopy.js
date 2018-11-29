const testObj = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    return Object.assign({}, obj);
}

function innerCopy2(obj) {
    const objCopy = {};

    Object.keys(obj).forEach((key) => {
        objCopy[key] = obj[key];
    });

    return objCopy;
}

console.log(innerCopy(testObj));
console.log(innerCopy2(testObj));
