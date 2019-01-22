// Task 1
console.log('\n');
console.log('Task 1\n');
const arrayF = [10, -10, 10, -10, 10];
const arrayS = [0, 0, 0, 0, 0];
const arrayT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (arr) => {
    let result = 0;
    return arr.map((value) => {
        result += value;
        return result;
    });
};

console.log(sumArray(arrayF));
console.log(sumArray(arrayS));
console.log(sumArray(arrayT));

// Task 2
console.log('\n');
console.log('Task 2\n');
const id = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

const block = {};
const createblock = (arr) => {
    arr.forEach((el) => {
        if (el in block) {
            block[el] += 1;
        } else {
            block[el] = 1;
        }
    });
    return block;
};
console.log(createblock(id));

// Task 3
console.log('\n');
console.log('Task 3\n');
const obj = { b: 'c', d: { e: 'f' } };
function copy(el) {
    const objCopy = {};
    Object.keys(el).forEach((key) => {
        if (typeof el[key] === 'object') {
            objCopy[key] = copy(el[key]);
        } else {
            objCopy[key] = el[key];
        }
    });
    return objCopy;
}
console.log(copy(obj));
console.log(copy(obj.d));

// Task 4
console.log('\n');
console.log('Task 4\n');
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getPeople(userId) {
    const user = people.find(man => man.id === userId);
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
