// copy object with nested objects

const obj1 = { b: 'c', d: { e: 'f' } };

const obj2 = {
    b: 'c',
    d: { e: 'f' },
    g: 1,
    h: [1, 2, 3],
    i: undefined,
    j: null,
    k: new Date(2018, 1, 1, 12, 0, 0),
    l: [{ m: true, n: false }, { o: 'p', q: 'r' }],
};

const innerCopy = (object) => {
    const clone = {};

    const getValue = (value) => {
        if (value === null) {
            return null;
        }
        if (value instanceof Date) {
            return new Date(value.getTime());
        }
        if (Array.isArray(value)) {
            return value.map(getValue);
        }
        if (typeof value === 'object') {
            return innerCopy(value);
        }
        return value;
    };

    Object.keys(object).forEach((key) => {
        clone[key] = getValue(object[key]);
    });
    return clone;
};

const obj1Copy = innerCopy(obj1);
const obj2Copy = innerCopy(obj2);

console.log(obj1Copy);
console.log(obj2Copy);

console.log(obj1Copy.d);
console.log(obj2Copy.l);
