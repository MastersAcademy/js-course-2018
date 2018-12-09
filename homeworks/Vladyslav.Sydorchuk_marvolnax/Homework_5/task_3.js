// task-3

const someObject = { b: 'c', d: { e: 'f' } };
function objectCopy(object) {
    const newObject = {};
    Object.keys(object).forEach((key) => {
        if (typeof object.key === 'object') {
            newObject[key] = objectCopy(object[key]);
        } else {
            newObject[key] = object[key];
        }
    });
    return newObject;
}
console.log(objectCopy(someObject));
