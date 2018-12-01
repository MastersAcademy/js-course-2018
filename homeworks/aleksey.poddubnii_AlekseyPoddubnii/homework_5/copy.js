
const inputObj = { b: 'c', d: { e: { s: 'f' } } };

function copy() {
    const objCopy = Object.assign({}, inputObj);
    console.log((objCopy)); // render copy inputObj
    console.log(objCopy.d.e); // render copy of d: {e:}
}

copy();
