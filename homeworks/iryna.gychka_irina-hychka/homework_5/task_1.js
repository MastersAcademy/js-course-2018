// Task 1.1 Converts a numeric array to array of sums
const xArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const yArray = [0, 0, 0, 0, 0];
const zArray = [10, -10, 10, -10, 10];

function sumArray(n) {
    let sum = 0;
    const result = n.map((v) => {
        sum += v;
        return sum;
    });
    return result;
}

// Task 1.2 Counts the duplicated values
const tagsClass = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function repeatCounter(someArray) {
    const tagsClassObj = {};
    for (let el = 0; el < someArray.length; el++) {
        if (tagsClassObj[someArray[el]] === undefined) {
            tagsClassObj[someArray[el]] = 1;
        } else {
            tagsClassObj[someArray[el]] += 1;
        }
    }
    return tagsClassObj;
}

// Task 1.3 Makes a copy of the object
const someObj = { b: 'c', d: { e: 'f' } };

function copyObj(obj) {
    const keys = Object.keys(obj);
    const newObj = {};
    for (let i = 0; i < keys.length; i++) {
        if (typeof (obj[keys[i]]) === 'object') {
            newObj[keys[i]] = copyObj(obj[keys[i]]);
        } else {
            newObj[keys[i]] = obj[keys[i]];
        }
    }
    return newObj;
}
// Task 1.4 Finds friends by passed Id
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const users = people.filter(p => (p.id === userId));
    if (users.length === 0 || users[0].friends === null) {
        return null;
    }
    const res = people.filter(p => (users[0].friends.indexOf(p.id) !== -1));
    return res.length > 0 ? res : null;
}

// The Outputs
// Task 1.1
console.log(sumArray(xArray));
console.log(sumArray(yArray));
console.log(sumArray(zArray));

// Task 1.2
console.log(repeatCounter(tagsClass));

// Task 1.3
console.log('The entry object:');
console.log(someObj);
console.log('The copied object:');
console.log(copyObj(someObj));

// Task 1.4
console.log(getPeople(2));
