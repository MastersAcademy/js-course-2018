
const oldArray = { b: 'c', d: { e: 'f' } };

const newArray = (arr) => {
    const newObject = {};
    Object.keys(arr).forEach((propertyKey) => {
        if (typeof (arr[propertyKey]) === 'object') {
            newObject[propertyKey] = newArray(arr[propertyKey]);
        } else {
            newObject[propertyKey] = arr[propertyKey];
        }
    });
    return newObject;
};

const copy = newArray(oldArray);

console.log(copy);

console.log(oldArray);

oldArray.b = 123;
console.log(oldArray);
console.log(copy);
