const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(input) {
    const objCopy = Object.assign({}, input);
    return objCopy;
}

console.log(innerCopy(obj));
