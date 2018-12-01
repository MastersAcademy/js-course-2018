// Task 1

function countNumber() {
    let number = 0;
    return (value) => {
        number += value;
        return number;
    };
}

function createMass(mass) {
    const array = mass;
    const summ = countNumber();
    for (let i = 0; i < array.length; i++) {
        array[i] = summ(array[i]);
    }
    return array;
}

console.log(createMass([10, -10, 10, -10, 10]));
console.log(createMass([0, 0, 0, 0, 0]));
console.log(createMass([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Task 2

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];


function sortKey(arr) {
    const obj = {};
    arr.forEach((x) => {
        if (x in obj) {
            obj[x] += 1;
        } else {
            obj[x] = 1;
        }
    });
    return obj;
}
console.log(sortKey(classes));

// Task 3

const obj = { b: 'c', d: { e: 'f' } };

function innerCopy() {
    const newObject = {};
    Object.keys(obj).forEach((key) => {
        newObject[key] = obj[key];
    });
    return newObject;
}
const objCopy = innerCopy(obj);


console.log(objCopy);

// Task 4

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const person = people.find(user => user.id === userId);
    if (typeof person === 'undefined') {
        return null;
    }

    if (Array.isArray(person.friends)) {
        return people.filter(user => person.friends.includes(user.id));
    }
    return [];
}

console.log(getPeople(2));
console.log(getPeople(3));
console.log(getPeople(2000));
