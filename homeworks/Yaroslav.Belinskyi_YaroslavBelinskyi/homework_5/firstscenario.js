// 1 task
const exampleArray = [10, -10, 10, -10, 10];
function sumArray(arr) {
    const resultArray = [];
    arr.reduce((previousSum, currentNumber) => {
        const value = previousSum + currentNumber;
        resultArray.push(value);
        return value;
    }, 0);
    console.log(resultArray);
}
sumArray(exampleArray);
// 2 task
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
function repeatsInObj(array) {
    const obj = array.reduce((classList, className) => {
        const cl = classList;
        const cn = className;
        if (cn in cl) {
            cl[cn]++;
        } else {
            cl[cn] = 1;
        }
        return classList;
    }, {});
    console.log(obj);
}
repeatsInObj(classes);
// 3 task
const objForCopy = { b: 'f', d: { e: 'f' } };
function objCopy(obj) {
    const copiedObj = {};
    if (typeof obj === 'object') {
        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'object') {
                copiedObj[key] = objCopy(obj[key]);
            } else {
                copiedObj[key] = obj[key];
            }
        });
    }
    return copiedObj;
}
const copiedObj = objCopy(objForCopy);
copiedObj.d.e = 0;
console.log(objForCopy);
console.log(copiedObj);
// 4 task
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getPeople(peopleArray, index) {
    const userId = peopleArray.find(user => user.id === index);
    if (typeof userId === 'undefined') { return null; }
    if (!Array.isArray(userId.friends)) { return null; }
    const result = peopleArray.filter(user => userId.friends.includes(user.id));
    return result;
}
console.log(getPeople(people, 2));
