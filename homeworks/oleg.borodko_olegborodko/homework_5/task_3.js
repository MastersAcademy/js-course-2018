const clone = {};

function copyObject(obj, externalKey) {
    Object.entries(obj).forEach((entry) => {
        const key = entry[0];
        const value = entry[1];

        if (value !== null && typeof value === 'object') {
            copyObject(value, key);
        } else if (externalKey) {
            clone[externalKey] = {};
            clone[externalKey][key] = value;
        } else {
            clone[key] = value;
        }
    });

    return clone;
}

const obj = {
    a: 'c',
    b: { e: 'f' },
    c: () => {},
    d: false,
    e: NaN,
    f: null,
    g: undefined,
    h: 0,
};

const newClone = copyObject(obj);

obj.b.e = 'f2';

console.log(newClone);
