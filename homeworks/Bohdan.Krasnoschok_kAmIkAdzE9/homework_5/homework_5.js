//Task_1
function returnSum(input) {
    const output = [];
    input.reduce((sum, value) => {
        output.push(sum + value);
        return sum + value;
    }, 0);
    return output;
}
console.log(returnSum([10, -10, 10, -10, 10]));
console.log(returnSum([0, 0, 0, 0, 0]));
console.log(returnSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Task_2
function returnobj(input) {
    const output = {};
    input.forEach((value) => {
        output[value] = (value in output) ? output[value] + 1 : 1;
    });
    return output;
}
const items = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
console.log(returnobj(items));

//Task_3
const obj = { b: 'c', d: { e: 'f' } };
function innerCopy(obj) {
    const objClone = {};
    obj.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'obj') {
            objClone[key] = innerCopy(obj[key]);
        } else {
            objClone[key] = obj[key];
        }
    });
    return objClone;
}
console.log(innerCopy(obj));
console.log(innerCopy(obj.d));

//Task_4
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getPeople(id) {
    const user = people.find(man => man.id === id);
    if (typeof user === 'undefined') {
        return null;
    }
    if (Array.isArray(user.friends)) {
        return people.filter(person => user.friends.includes(person.id));
    }
    return [];
}
console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
