// task 1

function sumArray(numbersArray) {
    let accumulator = 0;
    return numbersArray.map((currentNum) => {
        accumulator += currentNum;
        return accumulator;
    });
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// task 2

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function findSameKeyCuont(classesArray) {
    const classesList = {};
    classesArray.forEach((name) => {
        if (name in classesList) {
            classesList[name]++;
        } else {
            classesList[name] = 1;
        }
    });
    return classesList;
}
console.log(findSameKeyCuont(classes));

// task 3

const obj = { b: 'c', d: { e: 'f', g: { h: 'i' } } };

const innerCopy = (originObj) => {
    const clonedObj = {};
    Object.keys(originObj).forEach((key) => {
        if (typeof originObj[key] === 'object') {
            clonedObj[key] = innerCopy(originObj[key]);
        } else {
            clonedObj[key] = originObj[key];
        }
    });
    return clonedObj;
};
console.log(innerCopy(obj));
console.log(innerCopy(obj.d));

// task 4

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = (userId) => {
    const user = people.find(person => person.id === userId);
    if (!user) {
        return null;
    }
    if (user.friends) {
        return people.filter(person => user.friends.includes(person.id));
    }
    return [];
};
console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
