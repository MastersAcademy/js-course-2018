// task 1

const sumArray = (array) => {
    const result = [];
    let sum = 0;
    array.forEach((item) => {
        sum += item;
        result.push(sum);
    });
    return result;
};
const array1 = [10, -10, 10, -10, 10];
const array2 = [0, 0, 0, 0, 0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumArray(array1));
console.log(sumArray(array2));
console.log(sumArray(array3));

// task 2

const countElements = (array) => {
    const result = {};
    array.forEach((item) => {
        if (!result[item]) {
            result[item] = 1;
        }
        ++result[item];
    });
    return result;
};

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

console.log(countElements(classes));

// task 3

const innerCopy = (object) => {
    const result = {};
    Object.keys(object).forEach((key) => {
        if (typeof (object[key]) == 'object') {
            innerCopy(object[key]);
        }
        result[key] = object[key];
    });
    return result;
};

const obj = { b: 'c', d: { e: 'f' } };
const objCopy = innerCopy(obj);
console.log(objCopy.d);

// task 4

const getPeople = (people, userId) => {
    const result = [];
    const friendsIds = people.find(item => item.id === userId).friends;
    friendsIds.forEach((id) => {
        result.push(people.find(item => item.id === id));
    });
    return result;
};

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

console.log(getPeople(people, 2));
