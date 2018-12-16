// the task 1
function createCounter() {
    let num = 0;
    return ((ppp) => {
        num += ppp;
        return num;
    });
}


function sumArray(array) {
    const fn = createCounter();
    return array.map(fn);
}


console.log(sumArray([10, -10, 10, -10, 10]));
console.log(sumArray([0, 0, 0, 0, 0]));
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// the task 2
const employee = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function arr(ob) {
    const res = {};
    ob.forEach((x) => {
        if (x in res) {
            res[x] += 1;
        } else {
            res[x] = 1;
        }
    });
    return res;
}
console.log(arr(employee));

// the task 3
const Array = { b: 'c', d: { e: 'f' } };

function newArray(arr1) {
    const newObject = {};
    Object.keys(arr1).forEach((x) => {
        if (typeof (arr1[x]) === 'object') {
            newObject[x] = newArray(arr1[x]);
        } else {
            newObject[x] = arr1[x];
        }
    });

    return newObject;
}
const copy = newArray(Array);
console.log(copy.b);

// the task 4
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(nameid) {
    const user = people.find(x => x.id === nameid);
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
