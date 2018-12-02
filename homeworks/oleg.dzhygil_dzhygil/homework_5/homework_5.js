// Task 1

const arrayFirst = [10, -10, 10, -10, 10];
const arraySecond = [0, 0, 0, 0, 0];
const arrayThird = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfArray = (array) => {
    let number = 0;
    return array.map((value) => {
        number += value;
        return number;
    });
};

console.log(sumOfArray(arrayFirst));
console.log(sumOfArray(arraySecond));
console.log(sumOfArray(arrayThird));


// Task 2

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];


const sortKey = (arr) => {
    const obj = {};
    arr.forEach((x) => {
        if (x in obj) {
            obj[x] += 1;
        } else {
            obj[x] = 1;
        }
    });
    return obj;
};
console.log(sortKey(classes));

// Task 3

const obj = { b: 'c', d: { e: 'f' } };

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
const objCopy = innerCopy(obj);


console.log(objCopy.d);

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
