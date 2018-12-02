// Task 5.1
function sumWithNeighborElement(array) {
    const sumArray = [];
    array.reduce((sum, currentElement) => {
        sumArray.push(sum + currentElement);
        return sum + currentElement;
    }, 0);
    return sumArray;
}
console.log(sumWithNeighborElement([10, -10, 10, -10, 10]));
console.log(sumWithNeighborElement([0, 0, 0, 0, 0]));
console.log(sumWithNeighborElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task 5.2
function сountSameElements(arr) {
    const count = {};
    arr.forEach((x) => { count[x] = (count[x] || 0) + 1; });
    return count;
}
const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu',
    'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
console.log(сountSameElements(classes));

// Task 5.3
function innerCopy(elem) {
    const result = {};
    Object.keys(elem).forEach((key) => {
        if (typeof elem[key] === 'object') {
            result[key] = innerCopy(elem[key]);
        } else {
            result[key] = elem[key];
        }
    });
    return result;
}
const obj = { b: 'c', d: { e: 'f' } };
console.log(innerCopy(obj));
console.log(innerCopy(obj.d));

// Task 5.4
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const friends = [];
    if (people.find(user => user.id === userId)) {
        people.forEach((object) => {
            if (Array.isArray(object.friends)) {
                if (object.friends.includes(userId)) {
                    friends.push(object);
                }
            }
        });
    } else {
        return null;
    }
    return friends;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(6));
