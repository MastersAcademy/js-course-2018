const someObj = {
    b: 'c',
    d: {
        e: {
            s: 'f',
        },
    },
};

function innerCopy(obj) {
    const newObject = {};
    Object.keys(obj).forEach((key) => { newObject[key] = obj[key]; });
    return newObject;
}

const objCopy = innerCopy(someObj);

console.log(innerCopy(objCopy.d));
