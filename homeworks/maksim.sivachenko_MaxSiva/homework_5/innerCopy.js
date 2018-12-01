const obj = {
    b: 'c',
    d: { e: 'f' },
};

function innerCopy(myKey) {
    const keys = Object.keys(myKey);
    const result = {};
    keys.forEach((key) => {
        result[key] = myKey[key];
    });

    return result;
}

console.log(innerCopy(obj.d));
