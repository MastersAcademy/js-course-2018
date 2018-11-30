const obj = {
    b: 'c',
    d: { e: 'f' },
};

function innerCopy() {
    return Object.assign({}, obj);
}

const objCopy = innerCopy();

console.log(objCopy.d);
