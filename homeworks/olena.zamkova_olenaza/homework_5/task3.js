const innerCopy = obj => Object.assign({}, obj);

// output results

const a = { b: 'c', d: { e: 'f' } };
const objCopy = innerCopy(a);
console.log(objCopy.d);
