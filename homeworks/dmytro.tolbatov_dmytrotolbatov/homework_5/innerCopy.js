const testObj = { b: 'c', d: { e: 'f' } };

function innerCopy(obj) {
    const objCopy = {};

    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') {
            objCopy[key] = innerCopy(obj[key]);
        } else {
            objCopy[key] = obj[key];
        }
    });

    return objCopy;
}

console.log(innerCopy(testObj));
