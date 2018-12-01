const oldArray = [{ b: 'c', d: { e: 'f' } }];

function newArray(arr) {
    const newObject = {};
    Object.keys(arr).forEach((propertyKey) => {
        newObject[propertyKey] = arr[propertyKey];
    });
    return newObject;
}

// const newArray = oldArray.map((a) => {

// });

console.log(newArray(oldArray));
