function innerCopy(employee) {
    const keys = Object.keys(employee);
    const newEmployee = {};
    keys.forEach((key) => {
        if (typeof employee[key] === 'object') {
            newEmployee[key] = innerCopy(employee[key]);
        } else {
            newEmployee[key] = employee[key];
        }
    });
    return newEmployee;
}
const obj = { b: 'c', d: { e: 'f' } };
const copyObj = innerCopy(obj);
console.log(obj);
console.log(copyObj);
