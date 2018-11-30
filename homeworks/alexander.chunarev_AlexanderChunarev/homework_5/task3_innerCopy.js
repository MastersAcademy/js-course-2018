const someObj = {
    b: 'c',
    d: {
        e: {
            s: 'f',
        },
    },
};

function innerCopy(obj) {
    return Object.assign({}, obj);
}

console.log(someObj);

console.log(innerCopy(someObj.d.e));
