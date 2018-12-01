const obj = {
    b: 'c',
    d: { e: 'f' },
};

function innerCopy(myKey) {
    const keys = Object.keys(myKey);
    const clone = {};
    keys.forEach((key) => {
        if (typeof myKey[key] === 'object') {
            clone[key] = innerCopy(myKey[key]);
        } else {
            clone[key] = myKey[key];
        }
    });

    return clone;
}

console.log(innerCopy(obj.d));
