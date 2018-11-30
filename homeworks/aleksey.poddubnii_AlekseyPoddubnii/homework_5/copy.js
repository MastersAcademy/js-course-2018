
const inputObj = { b: 'c', d: { e: { s: 'f' } } };
const objCopy = Object.assign({}, inputObj);

console.log(objCopy); // return Input Obj }
console.log(objCopy.d.e); // return { s: f} }
