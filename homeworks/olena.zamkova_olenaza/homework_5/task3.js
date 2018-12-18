const innerCopy = (obj) => {
    const copy = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] !== null && typeof (obj[key]) === 'object') {
            copy[key] = innerCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    });

    return copy;
};

// output results

const a = { b: 'c', d: { e: 'f' } };
const objCopy = innerCopy(a);
console.log('objCopy.d: ', objCopy.d);
objCopy.d.e = 'g';
console.log('objCopy.d after update: ', objCopy.d);
console.log('a.d after objCopy update: ', a.d);
