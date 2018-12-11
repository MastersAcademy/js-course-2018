// Start Task 1
console.log('\n task 1 \n');

const firstArr = [10, -10, 10, -10, 10];
const secondArr = [0, 0, 0, 0, 0];
const thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function makeArrPartSumm(arr) {
    const sumArray = [];

    arr.reduce((prevVal, currVal) => {
        const summa = prevVal + currVal;
        sumArray.push(summa);
        return summa;
    },
    0);

    return sumArray;
}

console.log(makeArrPartSumm(firstArr));
console.log(makeArrPartSumm(secondArr));
console.log(makeArrPartSumm(thirdArr));

// Start Task 2
console.log('\n task 2 \n');

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function getCollection(arr) {
    const result = new Map();

    arr.forEach((value) => {
        if (result.has(value)) {
            result.set(value, result.get(value) + 1);
        } else {
            result.set(value, 1);
        }
    });
    return result;
}

console.log(getCollection(classes));

// Start Task 3
console.log('\n task 3 \n');

const object = { b: 'c', d: { e: 'f' } };

function copyObj(obj) {
    const clone = {};
    const keys = Object.keys(obj);

    keys.forEach((key) => {
        if (obj[key] != null && typeof obj[key] === 'object') {
            clone[key] = copyObj(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    });

    return clone;
}

const copy = copyObj(object);
console.log(copy.d);

// Start Task 4
console.log('\n task 4 \n');

const peoples = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    function findPeople(id) {
        return peoples.find(item => item.id === id);
    }

    const people = findPeople(userId);

    if (typeof people === 'undefined') {
        return null;
    }

    if (people.friends === null) {
        return [];
    }

    const { friends } = people;

    return peoples.filter(element => friends.includes(element.id));
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));

// unction getPeople(userId) {
//     const user = people.find(man => man.id === userId);
//     if (typeof user === 'undefined') {
//         return null;
//     }
//     if (Array.isArray(user.friends)) {
//         return people.filter(person => user.friends.includes(person.id));
//     }
//     return [];
// }
