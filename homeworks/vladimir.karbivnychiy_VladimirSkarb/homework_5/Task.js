//task1
const array1 = [10, -10, 10, -10, 10];
const array2 = [0, 0, 0, 0, 0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySum(array) {
    let num = 0;
    return array.map((item) => {
        num += item;
        return num;
    })
}

console.log(arraySum(array1));
console.log(arraySum(array2));
console.log(arraySum(array3));

//task2
let classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function sumElements(classArray) {
    const object = {};
    classArray.forEach((item) => {
        if (item in object) {
            object[item]++;
        } else {
            object[item] = 1;
        }
    });
    return object;
}

console.log(sumElements(classes));

//task3
const obj = { b: 'c', d: { e: 'f' } };

function interCopy(objectCopy) {
    const result = {};
    Object.keys(objectCopy).forEach((key) => {
        if (typeof (objectCopy[key]) === 'object') {
            interCopy(objectCopy[key]);
        }
        result[key] = objectCopy[key];
    });
    return result;
}

console.log(interCopy(obj))

//task4
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const guys = people.find(user => user.id === userId);
    if (typeof guys === 'undefined') {
        return null;
    }
    if (Array.isArray(guys.friends)) {
        return people.filter(person => guys.friends.includes(person.id));
    }
    return [];
}
console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));