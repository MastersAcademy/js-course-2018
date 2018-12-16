const obj = { b: 'c', d: { e: 'f' } };

const innerCopy = (object) => {
    const deepCopy = {};
    Object.keys(object).forEach((key) => {
        if (typeof (object[key]) === 'object') {
            innerCopy(object[key]);
        }
        deepCopy[key] = object[key];
    });
    return deepCopy;
};

const objectCopy = innerCopy(obj);
console.log(objectCopy.d);
