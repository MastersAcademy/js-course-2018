// 1
const sumArray = (arr) => {
    let num = 0;
    return arr.map((value) => {
        num += value;
        return num;
    });
};

console.log(sumArray([10, -10, 10, -10, 10]));
console.log(sumArray([0, 0, 0, 0, 0]));
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2

const elements = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
function returnObj(arr) {
    const result = {};
    arr.forEach((x) => {
        if (x in result) {
            result[x] += 1;
        } else {
            result[x] = 1;
        }
    });
    return result;
}

console.log(returnObj(elements));

// 3

const obj = { b: 'c', d: { e: 'f' } };
function innerCopy(inner) {
    const result = {};
    Object.keys(inner).forEach((key) => {
        if (typeof inner[key] === 'object') {
            result[key] = innerCopy(inner[key]);
        } else {
            result[key] = inner[key];
        }
    });
    return result;
}
console.log(innerCopy(obj));
console.log(innerCopy(obj.d));

// 4

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getPeople(userId) {
    const user = people.find(a => a.id === userId);
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
