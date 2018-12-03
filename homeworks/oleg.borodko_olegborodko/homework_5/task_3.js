function copyObject(obj) {
    const newObject = {};

    function fill(object, externalKey, ifObject = false) {
        Object.entries(object).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];

            newObject[key] = value;
            if (value && value.constructor === Object) {
                fill(value, key, true);
            } else if (ifObject) {
                newObject[externalKey] = {};
                newObject[externalKey][key] = value;
            } else {
                newObject[key] = value;
            }
        });
    }

    fill(obj);
    return newObject;
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

const objClone = copyObject(obj);

obj.d.e = 'f2';

console.log(objClone);
